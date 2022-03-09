import { DeleteResult } from 'typeorm';
import Client from '../models/client.model';

export type GetClientByIdParams = {
    id: string;
};

export type CreateClientParams = {
    id?: string;
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

export type ClientResponse = {
    client?: Client;
    error?: string;
};

export default interface ClientRepository {
    getAllClients(): Promise<Client[]>;
    getClientById(params: GetClientByIdParams): Promise<Client>;
    createClient(params: CreateClientParams): Promise<Client>;
    updateClient(params: UpdateClientParams): Promise<ClientResponse>;
    deleteClient(params: DeleteClientParams): Promise<DeleteResult>;
}
