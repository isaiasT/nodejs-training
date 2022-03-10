import { TestFactory } from '../../test-utils/factory';
import User from '../../domain/models/user.model';
import UserEntity from '../../infra/adapters/entities/user.entity';
import { UserSeed } from '../../infra/adapters/migrations/seeds/user.seed';

describe('Testing user useCases', () => {
    const factory: TestFactory = new TestFactory();

    const testUser: User = {
        email: 'test@email.com',
        name: 'testName',
        availability: 'testAvailability',
        country: 'testCountry',
        password: 'Devandtalent1-',
        id: '9b343054-c14a-400e-a299-d7f182e9c60a',
    };

    const testLoginUser = {
        email: 'test@email.com',
        password: 'Devandtalent1-',
    };

    const testBadLoginUser = {
        email: 'test@email.com',
        password: 'testBadPassword',
    };

    const testBadModifiedUser = {
        email: 'badEmail',
    };

    const testModifiedUser = {
        name: 'testNameModified',
    };

    let userToken;

    beforeAll(async () => {
        await factory.init();
        await factory.connection.getRepository<User>(UserEntity).save(UserSeed);
        process.env.TOKEN_SECRET = 'testTokenSecret';
    });

    afterAll(async () => {
        await factory.close();
    });

    describe('POST /users', () => {
        it('responds with status 400 on create new user', async () => {
            const response = await factory.app.post('/users/register').send();
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(7);
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
                    (error) => error.msg === `Field 'password' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Please enter a strong password`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === 'Invalid email',
                ).msg,
            ).toBeTruthy();
        });

        it('responds with new user', async () => {
            const response = await factory.app
                .post('/users/register')
                .send(testUser);
            const user: User = response.body;
            expect(user.email).toEqual(testUser.email);
        });

        it('responds with status 400 on create user with same email', async () => {
            const response = await factory.app
                .post('/users/register')
                .send(testUser);
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(1);
            expect(
                response.body.errors.find(
                    (error) => error.msg === 'User already exists',
                ).msg,
            ).toBeTruthy();
        });

        it('responds with logged user and token', async () => {
            const response = await factory.app
                .post('/users/login')
                .send(testLoginUser);
            const user = response.body;
            userToken = user.token;
            expect(user.email).toEqual(testUser.email);
            expect(user.token).toBeTruthy();
        });

        it('responds with status 400 after login, required fields', async () => {
            const response = await factory.app.post('/users/login').send();
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(3);
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'email' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'password' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === 'Invalid email',
                ).msg,
            ).toBeTruthy();
        });

        it('responds with status 400 after login, wrong credentials', async () => {
            const response = await factory.app
                .post('/users/login')
                .send(testBadLoginUser);
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(1);
            expect(
                response.body.errors.find(
                    (error) => error.msg === 'Invalid credentials',
                ).msg,
            ).toBeTruthy();
        });

        it('responds with invalid token error', async () => {
            const response = await factory.app.get('/users');
            expect(response.status).toEqual(401);
            console.log(response.body);
            expect(response.body.errors).toHaveLength(1);
            expect(
                response.body.errors.find(
                    (error) => error.msg === 'Invalid token',
                ).msg,
            ).toBeTruthy();
        });

        it('responds with all users', async () => {
            const response = await factory.app
                .get('/users')
                .set('Authorization', 'Bearer ' + userToken);
            expect(response.body).toHaveLength(UserSeed.length + 1);
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
