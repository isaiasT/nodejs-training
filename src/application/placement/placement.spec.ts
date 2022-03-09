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
import Placement from '../../domain/models/placement.model';
import PlacementEntity from '../../infra/adapters/entities/placement.entity';
import { PlacementSeed } from '../../infra/adapters/migrations/seeds/placement.seed';

describe('Testing jobRequest useCases', () => {
    const factory: TestFactory = new TestFactory();

    const testPlacement: Placement = {
        id: '4d42613c-c74d-4202-b373-8001d3fda294',
        user: UserSeed[0],
        client: ClientSeed[0],
        candidacy: CandidacySeed[0],
    };

    const testModifiedPlacement = {
        user: UserSeed[1],
    };

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
        await factory.connection
            .getRepository<Placement>(PlacementEntity)
            .save(PlacementSeed);
    });

    afterAll(async () => {
        await factory.close();
    });

    describe('POST /placements', () => {
        it('responds with status 400 on create new placement', async () => {
            const response = await factory.app.post('/placements').send();
            expect(response.status).toEqual(400);
            expect(response.body.errors).toHaveLength(3);
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'user' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'client' is required`,
                ).msg,
            ).toBeTruthy();
            expect(
                response.body.errors.find(
                    (error) => error.msg === `Field 'candidacy' is required`,
                ).msg,
            ).toBeTruthy();
        });

        it('responds with new placement', async () => {
            const response = await factory.app
                .post('/placements')
                .send(testPlacement);
            const placement: Placement = response.body;
            expect(placement).toEqual(testPlacement);
        });

        it('responds with all placements', async () => {
            const response = await factory.app.get('/placements');
            expect(response.body).toHaveLength(PlacementSeed.length + 1);
        });

        it('responds with modified placement', async () => {
            const response = await factory.app
                .put(`/placements/${testPlacement.id}`)
                .send(testModifiedPlacement);
            const placement: Placement = response.body;
            expect(placement.user).toEqual(testModifiedPlacement.user);
        });

        it('responds with error on update placement', async () => {
            const response = await factory.app
                .put(`/placements/badID`)
                .send(testModifiedPlacement);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("Placement doesn't exist");
        });

        it('responds with placement by id', async () => {
            const response = await factory.app.get(
                `/placements/${testPlacement.id}`,
            );
            expect(response.body.id).toEqual(testPlacement.id);
        });

        it('responds with error on delete placement', async () => {
            const response = await factory.app.delete(`/placements/badID`);
            expect(response.status).toEqual(400);
            expect(response.body.error).toEqual("Placement doesn't exist");
        });

        it('responds with deleted placement', async () => {
            const response = await factory.app.delete(
                `/placements/${testPlacement.id}`,
            );
            expect(response.body.affected).toEqual(1);
        });
    });
});
