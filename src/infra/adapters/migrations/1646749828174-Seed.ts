import Candidacy from '../../../domain/models/candidacy.model';
import CandidacyEntity from '../entities/candidacy.entity';
import Client from '../../../domain/models/client.model';
import ClientEntity from '../entities/client.entity';
import JobRequest from '../../../domain/models/jobRequest.model';
import JobRequestEntity from '../entities/jobRequest.entity';
import Placement from '../../../domain/models/placement.model';
import PlacementEntity from '../entities/placement.entity';
import User from '../../../domain/models/user.model';
import UserEntity from '../entities/user.entity';
import { CandidacySeed } from './seeds/candidacy.seed';
import { ClientSeed } from './seeds/client.seed';
import { JobRequestSeed } from './seeds/jobRequest.seed';
import { PlacementSeed } from './seeds/placement.seed';
import { UserSeed } from './seeds/user.seed';
import { getConnection, MigrationInterface } from 'typeorm';

export class Seed1646749828174 implements MigrationInterface {
    public async up(): Promise<void> {
        await getConnection().getRepository<User>(UserEntity).save(UserSeed);
        await getConnection()
            .getRepository<Client>(ClientEntity)
            .save(ClientSeed);
        await getConnection()
            .getRepository<JobRequest>(JobRequestEntity)
            .save(JobRequestSeed);
        await getConnection()
            .getRepository<Candidacy>(CandidacyEntity)
            .save(CandidacySeed);
        await getConnection()
            .getRepository<Placement>(PlacementEntity)
            .save(PlacementSeed);
    }

    public async down(): Promise<void> {
        // do nothing
    }
}
