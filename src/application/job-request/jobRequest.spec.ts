import { TestFactory } from '../../test-utils/factory';
import Client from '../../domain/models/client.model';
import ClientEntity from '../../infra/adapters/entities/client.entity';
import { ClientSeed } from '../../infra/adapters/migrations/seeds/client.seed';
import JobRequest from '../../domain/models/jobRequest.model';
import JobRequestEntity from '../../infra/adapters/entities/jobRequest.entity';
import { JobRequestSeed } from '../../infra/adapters/migrations/seeds/jobRequest.seed';

describe('Testing jobRequest useCases', () => {
    const factory: TestFactory = new TestFactory();

    const testJobRequest: JobRequest = {
        client: ClientSeed[0],
        jobFunction: 'testJobFunction',
        id: 'ab6d280b-f402-45c7-a3c6-e7c1d569903c',
    };

    const testModifiedJobRequest = {
        jobFunction: 'testJobFunctionModified',
    };

    const testClient: Client = {
        name: 'testName',
        country: 'testCountry',
        email: 'test@email.com',
        password: 'Devandtalent1-',
        id: '176232b9-4179-4e78-9fea-a4804d9725b5',
    };

    const loginClient = {
        email: 'test@email.com',
        password: 'Devandtalent1-',
    };

    let clientToken: string;

    beforeAll(async () => {
        await factory.init();
        await factory.connection
            .getRepository<Client>(ClientEntity)
            .save(ClientSeed);
        await factory.connection
            .getRepository<JobRequest>(JobRequestEntity)
            .save(JobRequestSeed);
        process.env.TOKEN_SECRET = 'testTokenSecret';
        await factory.app.post('/clients/register').send(testClient);
        const response = await factory.app
            .post('/clients/login')
            .send(loginClient);
        const client = response.body;
        clientToken = client.token;
    });

    afterAll(async () => {
        await factory.close();
    });

    describe('POST /jobrequests', () => {
        it('responds with status 400 on create new jobRequest', async () => {
            const response = await factory.app
                .post('/jobrequests')
                .set('Authorization', 'Bearer ' + clientToken)
                .send();
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(2);
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'client' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'jobFunction' is required`,
                ).msg,
            ).toBeTruthy();
        });

        it('responds with new jobRequest', async () => {
            const response = await factory.app
                .post('/jobrequests')
                .set('Authorization', 'Bearer ' + clientToken)
                .send(testJobRequest);
            const jobRequest: JobRequest = response.body;
            expect(jobRequest).toEqual(testJobRequest);
        });

        it('responds with all jobRequests', async () => {
            const response = await factory.app
                .get('/jobrequests')
                .set('Authorization', 'Bearer ' + clientToken);
            expect(response.body).toHaveLength(JobRequestSeed.length + 1);
        });

        it('responds with modified jobRequest', async () => {
            const response = await factory.app
                .put(`/jobrequests/${testJobRequest.id}`)
                .set('Authorization', 'Bearer ' + clientToken)
                .send(testModifiedJobRequest);
            const jobRequest: JobRequest = response.body;
            expect(jobRequest.jobFunction).toEqual(
                testModifiedJobRequest.jobFunction,
            );
        });

        it('responds with error on update jobRequest', async () => {
            const response = await factory.app
                .put(`/jobrequests/badID`)
                .set('Authorization', 'Bearer ' + clientToken)
                .send(testModifiedJobRequest);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("JobRequest doesn't exist");
        });

        it('responds with jobRequest by id', async () => {
            const response = await factory.app
                .get(`/jobrequests/${testJobRequest.id}`)
                .set('Authorization', 'Bearer ' + clientToken);
            expect(response.body.id).toEqual(testJobRequest.id);
        });

        it('responds with error on delete jobRequest', async () => {
            const response = await factory.app
                .delete(`/jobrequests/badID`)
                .set('Authorization', 'Bearer ' + clientToken);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("JobRequest doesn't exist");
        });

        it('responds with deleted jobRequest', async () => {
            const response = await factory.app
                .delete(`/jobrequests/${testJobRequest.id}`)
                .set('Authorization', 'Bearer ' + clientToken);
            expect(response.body.affected).toEqual(1);
        });
    });
});
