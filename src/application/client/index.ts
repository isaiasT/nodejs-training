import GetAllClientsUseCase from './getAllClients.usecase';
import GetClientByIdUseCase from './getClientById.usecase';
import RegisterClientUseCase from './registerClient.usecase';
import UpdateClientUseCase from './updateClient.usecase';
import DeleteClientUseCase from './deleteClient.usecase';
import ClientORM from '../../infra/adapters/repositories/client.repository';
import {
    RegisterClientParams,
    DeleteClientParams,
    GetClientByIdParams,
    UpdateClientParams,
} from '../../domain/repositories/client.repository';

const clientRepository = ClientORM();

export const GetAllClients = () => GetAllClientsUseCase(clientRepository);
export const GetClientById = (params: GetClientByIdParams) =>
    GetClientByIdUseCase(clientRepository, params);
export const RegisterClient = (params: RegisterClientParams) =>
    RegisterClientUseCase(clientRepository, params);
export const UpdateClient = (params: UpdateClientParams) =>
    UpdateClientUseCase(clientRepository, params);
export const DeleteClient = (params: DeleteClientParams) =>
    DeleteClientUseCase(clientRepository, params);
