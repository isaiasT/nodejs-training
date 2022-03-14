import { TestFactory } from '../../test-utils/factory';
import Client from '../../domain/models/client.model';
import ClientEntity from '../../infra/adapters/entities/client.entity';
import { ClientSeed } from '../../infra/adapters/migrations/seeds/client.seed';
import JobRequest from '../../domain/models/jobRequest.model';
import JobRequestEntity from '../../infra/adapters/entities/jobRequest.entity';
import { JobRequestSeed } from '../../infra/adapters/migrations/seeds/jobRequest.seed';
import Candidacy from '../../domain/models/candidacy.model';
import { UserSeed } from '../../infra/adapters/migrations/seeds/user.seed';
import User from '../../domain/models/user.model';
import UserEntity from '../../infra/adapters/entities/user.entity';
import { CandidacySeed } from '../../infra/adapters/migrations/seeds/candidacy.seed';
import CandidacyEntity from '../../infra/adapters/entities/candidacy.entity';

describe('Testing jobRequest useCases', () => {
    const factory: TestFactory = new TestFactory();

    const testCandidacy: Candidacy = {
        id: '3a01f690-8180-44c7-9c79-cbc9d723d09f',
        jobRequest: JobRequestSeed[0],
        user: UserSeed[0],
        status: 'testStatus',
    };

    const testModifiedCandidacy = {
        status: 'testStatusModified',
    };

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

    let userToken: string;

    beforeAll(async () => {
        await factory.init();
        await factory.connection.getRepository<User>(UserEntity).save(UserSeed);
        await factory.connection
            .getRepository<Client>(ClientEntity)
            .save(ClientSeed);
        await factory.connection
            .getRepository<JobRequest>(JobRequestEntity)
            .save(JobRequestSeed);
        await factory.connection
            .getRepository<Candidacy>(CandidacyEntity)
            .save(CandidacySeed);
        process.env.TOKEN_SECRET = 'testTokenSecret';
        await factory.app.post('/users/register').send(testUser);
        const response = await factory.app
            .post('/users/login')
            .send(testLoginUser);
        const user = response.body;
        userToken = user.token;
    });

    afterAll(async () => {
        await factory.close();
    });

    describe('POST /candidacies', () => {
        it('responds with status 400 on create new candidacy', async () => {
            const response = await factory.app
                .post('/candidacies')
                .set('Authorization', 'Bearer ' + userToken)
                .send();
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(3);
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'jobRequest' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'user' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'status' is required`,
                ).msg,
            ).toBeTruthy();
        });

        it('responds with new candidacy', async () => {
            const response = await factory.app
                .post('/candidacies')
                .set('Authorization', 'Bearer ' + userToken)
                .send(testCandidacy);
            const candidacy: Candidacy = response.body;
            expect(candidacy).toEqual(testCandidacy);
        });

        it('responds with all candidacies', async () => {
            const response = await factory.app
                .get('/candidacies')
                .set('Authorization', 'Bearer ' + userToken);
            expect(response.body).toHaveLength(CandidacySeed.length + 1);
        });

        it('responds with modified candidacy', async () => {
            const response = await factory.app
                .put(`/candidacies/${testCandidacy.id}`)
                .set('Authorization', 'Bearer ' + userToken)
                .send(testModifiedCandidacy);
            const candidacy: Candidacy = response.body;
            expect(candidacy.status).toEqual(testModifiedCandidacy.status);
        });

        it('responds with error on update candidacy', async () => {
            const response = await factory.app
                .put(`/candidacies/badID`)
                .set('Authorization', 'Bearer ' + userToken)
                .send(testModifiedCandidacy);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("Candidacy doesn't exist");
        });

        it('responds with candidacy by id', async () => {
            const response = await factory.app
                .get(`/candidacies/${testCandidacy.id}`)
                .set('Authorization', 'Bearer ' + userToken);
            expect(response.body.id).toEqual(testCandidacy.id);
        });

        it('responds with error on delete candidacy', async () => {
            const response = await factory.app
                .delete(`/candidacies/badID`)
                .set('Authorization', 'Bearer ' + userToken);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("Candidacy doesn't exist");
        });

        it('responds with deleted candidacy', async () => {
            const response = await factory.app
                .delete(`/candidacies/${testCandidacy.id}`)
                .set('Authorization', 'Bearer ' + userToken);
            expect(response.body.affected).toEqual(1);
        });
    });
});
