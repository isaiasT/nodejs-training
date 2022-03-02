import { DeleteResult } from 'typeorm';
import Client from '../../entities/Client';

export type GetClientByIdParams = {
    id: string;
};

export type CreateClientParams = {
    name: string;
    country: string;
};

export type UpdateClientParams = {
    id: string;
    name?: string;
    country?: string;
};

export type DeleteClientParams = {
    id: string;
};

export default interface ClientRepository {
    getAllClients(): Promise<Client[]>;
    getClientById(params: GetClientByIdParams): Promise<Client>;
    createClient(params: CreateClientParams): Promise<Client>;
    updateClient(params: UpdateClientParams): Promise<Client>;
    deleteClient(params: DeleteClientParams): Promise<DeleteResult>;
}
