import Client from './client.model';

export default interface JobRequest {
    id: string;
    client: Client;
    jobFunction: string;
}
