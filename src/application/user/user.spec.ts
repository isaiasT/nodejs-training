import { TestFactory } from '../../test-utils/factory';
import User from '../../domain/models/user.model';

describe('Testing user useCases', () => {
    const factory: TestFactory = new TestFactory();

    const testUser: User = {
        email: 'test@email.com',
        name: 'testName',
        availability: 'testAvailability',
        country: 'testCountry',
        id: 'testId',
    };

    const testBadModifiedUser = {
        email: 'badEmail',
    };

    const testModifiedUser = {
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
            testUser.id = user.id;
            expect(user).toEqual(testUser);
        });

        it('responds with all users', async () => {
            const response = await factory.app.get('/users');
            expect(response.body).toHaveLength(1);
        });

        it('responds with status 400 on update user', async () => {
            const response = await factory.app
                .put(`/users/${testUser.id}`)
                .send(testBadModifiedUser);
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
                .send(testModifiedUser);
            const user: User = response.body;
            expect(user.name).toEqual(testModifiedUser.name);
        });

        it('responds with error on update user', async () => {
            const response = await factory.app
                .put(`/users/badID`)
                .send(testModifiedUser);
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
