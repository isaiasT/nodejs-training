import CandidacyRepository, {
    GetCandidacyByIdParams,
    CreateCandidacyParams,
    UpdateCandidacyParams,
    DeleteCandidacyParams,
} from './index';
import Candidacy from '../../entities/Candidacy';
import { getConnection } from 'typeorm';
import _ from 'lodash';

class CandidacyORM implements CandidacyRepository {
    getAllCandidacies = async () => {
        const repositoryORM = getConnection().getRepository(Candidacy);
        const clients = await repositoryORM.find({
            relations: ['jobRequest', 'user'],
        });
        return clients;
    };

    getCandidacyById = async (params: GetCandidacyByIdParams) => {
        const repositoryORM = getConnection().getRepository(Candidacy);
        const client = await repositoryORM.findOne(params.id, {
            relations: ['jobRequest', 'user'],
        });
        return client;
    };

    createCandidacy = async (params: CreateCandidacyParams) => {
        const repositoryORM = getConnection().getRepository(Candidacy);
        const client = await repositoryORM.create(params);
        const results = await repositoryORM.save(client);
        return results;
    };

    updateCandidacy = async (params: UpdateCandidacyParams) => {
        const repositoryORM = getConnection().getRepository(Candidacy);
        const client = await repositoryORM.findOne(params.id, {
            relations: ['jobRequest', 'user'],
        });
        repositoryORM.merge(client, _.omit(params, 'id'));
        const results = await repositoryORM.save(client);
        return results;
    };

    deleteCandidacy = async (params: DeleteCandidacyParams) => {
        const repositoryORM = getConnection().getRepository(Candidacy);
        const results = await repositoryORM.delete(params.id);
        return results;
    };
}

export default CandidacyORM;
