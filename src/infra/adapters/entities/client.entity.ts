import { EntitySchema } from 'typeorm';
import Client from '../../../domain/models/client.model';

const ClientEntity = new EntitySchema<Client>({
    name: 'client',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        name: {
            type: String,
        },
        country: {
            type: String,
        },
    },
    relations: {
        jobRequests: {
            type: 'one-to-many',
            target: 'job_request',
            inverseSide: 'client',
        },
        placements: {
            type: 'one-to-many',
            target: 'placement',
            inverseSide: 'client',
        },
    },
});

export default ClientEntity;
