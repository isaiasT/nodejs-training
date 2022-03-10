import { DeleteResult } from 'typeorm';
import Client from '../models/client.model';

export type GetClientByIdParams = {
    id: string;
};

export type RegisterClientParams = {
    id?: string;
    name: string;
    country: string;
    email: string;
    password: string;
};

export type RegisterClientResponse = {
    id: string;
    name: string;
    country: string;
    email: string;
};

export type UpdateClientParams = {
    id: string;
    name?: string;
    country?: string;
    password?: string;
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
    registerClient(
        params: RegisterClientParams,
    ): Promise<RegisterClientResponse>;
    updateClient(params: UpdateClientParams): Promise<ClientResponse>;
    deleteClient(params: DeleteClientParams): Promise<DeleteResult>;
}
