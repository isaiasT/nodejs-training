import { EntitySchema } from 'typeorm';
import User from '../../../domain/models/user.model';

const UserEntity = new EntitySchema<User>({
    name: 'user',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        name: {
            type: String,
        },
        availability: {
            type: String,
        },
        email: {
            type: String,
        },
        country: {
            type: String,
        },
    },
    relations: {
        candidacies: {
            type: 'one-to-many',
            target: 'candidacy',
            inverseSide: 'user',
        },
        placements: {
            type: 'one-to-many',
            target: 'placement',
            inverseSide: 'user',
        },
    },
});

export default UserEntity;
