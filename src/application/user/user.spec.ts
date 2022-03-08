import User from '../../infra/adapters/entities/user.entity';
import { TestFactory } from '../../test-utils/factory';
import _ from 'lodash';

describe('Testing user component', () => {
    const factory: TestFactory = new TestFactory();

    const testUser = new User();
    testUser.email = 'test@email.com';
    testUser.name = 'testName';
    testUser.availability = 'testAvailability';
    testUser.country = 'testCountry';

    const testBadUserModifiedFields = {
        email: 'badEmail',
    };

    const testUserModifiedFields = {
        name: 'testNameModified',
    };

    beforeAll(async () => {
        await factory.init();
    });

    afterAll(async () => {
        await factory.close();
    });

    describe('POST /users', () => {
        it('responds with status 400 on create new user', async () => {
            const response = await factory.app.post('/users').send();
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(5);
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'name' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'availability' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'country' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'email' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === 'Invalid email',
                ).msg,
            ).toBeTruthy();
        });

        it('responds with new user', async () => {
            const response = await factory.app.post('/users').send(testUser);
            const user: User = response.body;
            expect(_.omit(user, 'id')).toEqual(testUser);
            testUser.id = user.id;
        });

        it('responds with all users', async () => {
            const response = await factory.app.get('/users');
            expect(response.body).toHaveLength(1);
        });

        it('responds with status 400 on update user', async () => {
            const response = await factory.app
                .put(`/users/${testUser.id}`)
                .send(testBadUserModifiedFields);
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(1);
            expect(
                response.body.errors.find(
                    (error) => error.msg === 'Invalid email',
                ).msg,
            ).toBeTruthy();
        });

        it('responds with modified user', async () => {
            const response = await factory.app
                .put(`/users/${testUser.id}`)
                .send(testUserModifiedFields);
            const user: User = response.body;
            expect(user.name).toEqual(testUserModifiedFields.name);
        });

        it('responds with error on update user', async () => {
            const response = await factory.app
                .put(`/users/badID`)
                .send(testUserModifiedFields);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("User doesn't exist");
        });

        it('responds with user by id', async () => {
            const response = await factory.app.get(`/users/${testUser.id}`);
            expect(response.body.id).toEqual(testUser.id);
        });

        it('responds with error on delete user', async () => {
            const response = await factory.app.delete(`/users/badID`);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("User doesn't exist");
        });

        it('responds with deleted user', async () => {
            const response = await factory.app.delete(`/users/${testUser.id}`);
            expect(response.body.affected).toEqual(1);
        });
    });
});
