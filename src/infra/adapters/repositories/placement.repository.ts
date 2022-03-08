import PlacementRepository, {
    GetPlacementByIdParams,
    CreatePlacementParams,
    UpdatePlacementParams,
    DeletePlacementParams,
} from '../../../domain/repositories/placement.repository';
import Placement from '../../../domain/models/placement.model';
import PlacementEntity from '../entities/placement.entity';
import { getConnection } from 'typeorm';
import _ from 'lodash';

const PlacementORM = (): PlacementRepository => {
    return {
        getAllPlacements: async () => {
            const repositoryORM =
                getConnection().getRepository<Placement>(PlacementEntity);
            const clients = await repositoryORM.find({
                relations: ['user', 'client', 'candidacy'],
            });
            return clients;
        },

        getPlacementById: async (params: GetPlacementByIdParams) => {
            const repositoryORM =
                getConnection().getRepository<Placement>(PlacementEntity);
            const client = await repositoryORM.findOne(params.id, {
                relations: ['user', 'client', 'candidacy'],
            });
            return client;
        },

        createPlacement: async (params: CreatePlacementParams) => {
            const repositoryORM =
                getConnection().getRepository<Placement>(PlacementEntity);
            const client = await repositoryORM.create(params);
            const results = await repositoryORM.save(client);
            return results;
        },

        updatePlacement: async (params: UpdatePlacementParams) => {
            const repositoryORM =
                getConnection().getRepository<Placement>(PlacementEntity);
            const client = await repositoryORM.findOne(params.id, {
                relations: ['user', 'client', 'candidacy'],
            });
            repositoryORM.merge(client, _.omit(params, 'id'));
            const results = await repositoryORM.save(client);
            return results;
        },

        deletePlacement: async (params: DeletePlacementParams) => {
            const repositoryORM =
                getConnection().getRepository<Placement>(PlacementEntity);
            const results = await repositoryORM.delete(params.id);
            return results;
        },
    };
};

export default PlacementORM;
