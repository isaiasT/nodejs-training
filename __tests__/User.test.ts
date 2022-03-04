import User from '../src/core/entities/User';
import { TestFactory } from '../testUtils/factory';
import _ from 'lodash';

describe('Testing user component', () => {
    const factory: TestFactory = new TestFactory();

    const testUser = new User();
    testUser.email = 'test@email.com';
    testUser.name = 'testName';
    testUser.availability = 'testAvailability';
    testUser.country = 'testCountry';

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
        it('responds with status 400', async () => {
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

        it('responds with modified user', async () => {
            const response = await factory.app
                .put(`/users/${testUser.id}`)
                .send(testUserModifiedFields);
            const user: User = response.body;
            expect(user.name).toEqual(testUserModifiedFields.name);
        });

        it('responds with user by id', async () => {
            const response = await factory.app.get(`/users/${testUser.id}`);
            expect(response.body.id).toEqual(testUser.id);
        });

        it('responds with deleted user', async () => {
            const response = await factory.app.delete(`/users/${testUser.id}`);
            expect(response.body.affected).toEqual(1);
        });
    });
});
