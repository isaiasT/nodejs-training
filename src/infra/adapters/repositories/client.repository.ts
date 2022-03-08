import ClientRepository, {
    GetClientByIdParams,
    CreateClientParams,
    UpdateClientParams,
    DeleteClientParams,
} from '../../../domain/repositories/client.repository';
import Client from '../entities/client.entity';
import { getConnection } from 'typeorm';
import _ from 'lodash';

class ClientORM implements ClientRepository {
    getAllClients = async () => {
        const repositoryORM = getConnection().getRepository(Client);
        const clients = await repositoryORM.find();
        return clients;
    };

    getClientById = async (params: GetClientByIdParams) => {
        const repositoryORM = getConnection().getRepository(Client);
        const client = await repositoryORM.findOne(params.id);
        return client;
    };

    createClient = async (params: CreateClientParams) => {
        const repositoryORM = getConnection().getRepository(Client);
        const client = await repositoryORM.create(params);
        const results = await repositoryORM.save(client);
        return results;
    };

    updateClient = async (params: UpdateClientParams) => {
        const repositoryORM = getConnection().getRepository(Client);
        const client = await repositoryORM.findOne(params.id);
        repositoryORM.merge(client, _.omit(params, 'id'));
        const results = await repositoryORM.save(client);
        return results;
    };

    deleteClient = async (params: DeleteClientParams) => {
        const repositoryORM = getConnection().getRepository(Client);
        const results = await repositoryORM.delete(params.id);
        return results;
    };
}

export default ClientORM;
