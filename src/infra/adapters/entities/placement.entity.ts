import { EntitySchema } from 'typeorm';
import Placement from '../../../domain/models/placement.model';

const PlacementEntity = new EntitySchema<Placement>({
    name: 'placement',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'user',
            joinColumn: true,
        },
        client: {
            type: 'many-to-one',
            target: 'client',
            joinColumn: true,
        },
        candidacy: {
            type: 'one-to-one',
            target: 'candidacy',
            joinColumn: true,
        },
    },
});

export default PlacementEntity;
