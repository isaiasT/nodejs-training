import { TestFactory } from '../../test-utils/factory';
import Client from '../../domain/models/client.model';
import ClientEntity from '../../infra/adapters/entities/client.entity';
import { ClientSeed } from '../../infra/adapters/migrations/seeds/client.seed';
import { UserSeed } from '../../infra/adapters/migrations/seeds/user.seed';
import User from '../../domain/models/user.model';
import UserEntity from '../../infra/adapters/entities/user.entity';

describe('Testing client useCases', () => {
    const factory: TestFactory = new TestFactory();

    const testClient: Client = {
        name: 'testName',
        country: 'testCountry',
        email: 'test@email.com',
        password: 'Devandtalent1-',
        id: '176232b9-4179-4e78-9fea-a4804d9725b5',
    };

    const testModifiedClient = {
        name: 'testNameModified',
    };

    const testLoginClient = {
        email: 'test@email.com',
        password: 'Devandtalent1-',
    };

    const testBadModifiedClient = {
        email: 'badEmail',
    };

    const testBadLoginClient = {
        email: 'test@email.com',
        password: 'testBadPassword',
    };

    let clientToken: string;

    beforeAll(async () => {
        await factory.init();
        await factory.connection.getRepository<User>(UserEntity).save(UserSeed);
        await factory.connection
            .getRepository<Client>(ClientEntity)
            .save(ClientSeed);
        process.env.TOKEN_SECRET = 'testTokenSecret';
    });

    afterAll(async () => {
        await factory.close();
    });

    describe('POST /clients', () => {
        it('responds with status 400 on create new client', async () => {
            const response = await factory.app.post('/clients/register').send();
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(6);
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'name' is required`,
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

        it('responds with new client', async () => {
            const response = await factory.app
                .post('/clients/register')
                .send(testClient);
            const client: Client = response.body;
            expect(client.email).toEqual(testClient.email);
        });

        it('responds with status 400 on create client with same email', async () => {
            const response = await factory.app
                .post('/clients/register')
                .send(testClient);
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(1);
            expect(
                response.body.errors.find(
                    (error) => error.msg === 'Client already exists',
                ).msg,
            ).toBeTruthy();
        });

        it('responds with logged client and token', async () => {
            const response = await factory.app
                .post('/clients/login')
                .send(testLoginClient);
            const client = response.body;
            clientToken = client.token;
            expect(client.email).toEqual(testClient.email);
            expect(client.token).toBeTruthy();
        });

        it('responds with status 400 after login, required fields', async () => {
            const response = await factory.app.post('/clients/login').send();
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
                .post('/clients/login')
                .send(testBadLoginClient);
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(1);
            expect(
                response.body.errors.find(
                    (error) => error.msg === 'Invalid credentials',
                ).msg,
            ).toBeTruthy();
        });

        it('responds with invalid token error', async () => {
            const response = await factory.app.get('/clients');
            expect(response.status).toEqual(401);
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
                .set('Authorization', 'Bearer ' + clientToken);
            expect(response.body).toHaveLength(UserSeed.length);
        });

        it('responds with status 400 on update client', async () => {
            const response = await factory.app
                .put(`/clients/${testClient.id}`)
                .set('Authorization', 'Bearer ' + clientToken)
                .send(testBadModifiedClient);
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(1);
            expect(
                response.body.errors.find(
                    (error) => error.msg === 'Invalid email',
                ).msg,
            ).toBeTruthy();
        });

        it('responds with modified client', async () => {
            const response = await factory.app
                .put(`/clients/${testClient.id}`)
                .set('Authorization', 'Bearer ' + clientToken)
                .send(testModifiedClient);
            const client: Client = response.body;
            expect(client.name).toEqual(testModifiedClient.name);
        });

        it('responds with error on update client', async () => {
            const response = await factory.app
                .put(`/clients/badID`)
                .set('Authorization', 'Bearer ' + clientToken)
                .send(testModifiedClient);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("Client doesn't exist");
        });

        it('responds with client by id', async () => {
            const response = await factory.app
                .get(`/clients/${testClient.id}`)
                .set('Authorization', 'Bearer ' + clientToken);
            expect(response.body.id).toEqual(testClient.id);
        });

        it('responds with error on delete client', async () => {
            const response = await factory.app
                .delete(`/clients/badID`)
                .set('Authorization', 'Bearer ' + clientToken);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("Client doesn't exist");
        });

        it('responds with deleted client', async () => {
            const response = await factory.app
                .delete(`/clients/${testClient.id}`)
                .set('Authorization', 'Bearer ' + clientToken);
            expect(response.body.affected).toEqual(1);
        });

        it('responds with status 401 on creating candidacy', async () => {
            const response = await factory.app
                .post('/candidacies')
                .set('Authorization', 'Bearer ' + clientToken);
            expect(response.status).toEqual(401);
            expect(response.body.errors).toHaveLength(1);
            expect(
                response.body.errors.find(
                    (error) => error.msg === 'Unauthorized',
                ).msg,
            ).toBeTruthy();
        });
    });
});
