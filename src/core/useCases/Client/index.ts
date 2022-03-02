import GetAllClientsUseCase from './getAllClients';
import GetClientByIdUseCase from './getClientById';
import CreateClientUseCase from './createClient';
import UpdateClientUseCase from './updateClient';
import DeleteClientUseCase from './deleteClient';
import ClientORM from '../../repositories/Client/repositoryORM';
import {
    CreateClientParams,
    DeleteClientParams,
    GetClientByIdParams,
    UpdateClientParams,
} from '../../repositories/Client';

const clientRepository = new ClientORM();

export const GetAllClients = () => GetAllClientsUseCase(clientRepository);
export const GetClientById = (params: GetClientByIdParams) =>
    GetClientByIdUseCase(clientRepository, params);
export const CreateClient = (params: CreateClientParams) =>
    CreateClientUseCase(clientRepository, params);
export const UpdateClient = (params: UpdateClientParams) =>
    UpdateClientUseCase(clientRepository, params);
export const DeleteClient = (params: DeleteClientParams) =>
    DeleteClientUseCase(clientRepository, params);
