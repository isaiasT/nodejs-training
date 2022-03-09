import { TestFactory } from '../../test-utils/factory';
import Client from '../../domain/models/client.model';
import ClientEntity from '../../infra/adapters/entities/client.entity';
import { ClientSeed } from '../../infra/adapters/migrations/seeds/client.seed';

describe('Testing client useCases', () => {
    const factory: TestFactory = new TestFactory();

    const testClient: Client = {
        name: 'testName',
        country: 'testCountry',
        id: '176232b9-4179-4e78-9fea-a4804d9725b5',
    };

    const testModifiedClient = {
        name: 'testNameModified',
    };

    beforeAll(async () => {
        await factory.init();
        await factory.connection
            .getRepository<Client>(ClientEntity)
            .save(ClientSeed);
    });

    afterAll(async () => {
        await factory.close();
    });

    describe('POST /clients', () => {
        it('responds with status 400 on create new client', async () => {
            const response = await factory.app.post('/clients').send();
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(2);
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
        });

        it('responds with new client', async () => {
            const response = await factory.app
                .post('/clients')
                .send(testClient);
            const client: Client = response.body;
            expect(client).toEqual(testClient);
        });

        it('responds with all clients', async () => {
            const response = await factory.app.get('/clients');
            expect(response.body).toHaveLength(ClientSeed.length + 1);
        });

        it('responds with modified client', async () => {
            const response = await factory.app
                .put(`/clients/${testClient.id}`)
                .send(testModifiedClient);
            const client: Client = response.body;
            expect(client.name).toEqual(testModifiedClient.name);
        });

        it('responds with error on update client', async () => {
            const response = await factory.app
                .put(`/clients/badID`)
                .send(testModifiedClient);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("Client doesn't exist");
        });

        it('responds with client by id', async () => {
            const response = await factory.app.get(`/clients/${testClient.id}`);
            expect(response.body.id).toEqual(testClient.id);
        });

        it('responds with error on delete client', async () => {
            const response = await factory.app.delete(`/clients/badID`);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("Client doesn't exist");
        });

        it('responds with deleted client', async () => {
            const response = await factory.app.delete(
                `/clients/${testClient.id}`,
            );
            expect(response.body.affected).toEqual(1);
        });
    });
});
