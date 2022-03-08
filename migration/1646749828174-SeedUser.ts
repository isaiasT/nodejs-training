import { getConnection, MigrationInterface } from 'typeorm';
import User from '../src/domain/models/user.model';
import UserEntity from '../src/infra/adapters/entities/user.entity';
import { UserSeed } from './seeds/user.seed';

export class SeedUser1646749828174 implements MigrationInterface {
    public async up(): Promise<void> {
        getConnection().getRepository<User>(UserEntity).save(UserSeed);
    }

    public async down(): Promise<void> {
        // do nothing
    }
}
