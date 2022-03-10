import ClientRepository, {
    GetClientByIdParams,
    RegisterClientParams,
    UpdateClientParams,
    DeleteClientParams,
} from '../../../domain/repositories/client.repository';
import Client from '../../../domain/models/client.model';
import ClientEntity from '../entities/client.entity';
import { getConnection } from 'typeorm';
import _ from 'lodash';

const ClientORM = (): ClientRepository => {
    return {
        getAllClients: async () => {
            const repositoryORM =
                getConnection().getRepository<Client>(ClientEntity);
            const clients = await repositoryORM.find();
            return clients;
        },

        getClientById: async (params: GetClientByIdParams) => {
            const repositoryORM =
                getConnection().getRepository<Client>(ClientEntity);
            const client = await repositoryORM.findOne(params.id);
            return client;
        },

        registerClient: async (params: RegisterClientParams) => {
            const repositoryORM =
                getConnection().getRepository<Client>(ClientEntity);
            const client = await repositoryORM.create(params);
            const results = await repositoryORM.save(client);
            return _.omit(results, 'password');
        },

        updateClient: async (params: UpdateClientParams) => {
            const repositoryORM =
                getConnection().getRepository<Client>(ClientEntity);
            const client = await repositoryORM.findOne(params.id);
            if (client) {
                repositoryORM.merge(client, _.omit(params, 'id'));
                const results = await repositoryORM.save(client);
                return { client: results };
            }
            return { error: "Client doesn't exist" };
        },

        deleteClient: async (params: DeleteClientParams) => {
            const repositoryORM =
                getConnection().getRepository<Client>(ClientEntity);
            const results = await repositoryORM.delete(params.id);
            return results;
        },
    };
};

export default ClientORM;
