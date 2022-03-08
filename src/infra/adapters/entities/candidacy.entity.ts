import { EntitySchema } from 'typeorm';
import Candidacy from '../../../domain/models/candidacy.model';

const CandidacyEntity = new EntitySchema<Candidacy>({
    name: 'candidacy',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        status: {
            type: String,
        },
    },
    relations: {
        jobRequest: {
            type: 'many-to-one',
            target: 'job_request',
            joinColumn: true,
        },
        user: {
            type: 'many-to-one',
            target: 'user',
            joinColumn: true,
        },
    },
});

export default CandidacyEntity;
