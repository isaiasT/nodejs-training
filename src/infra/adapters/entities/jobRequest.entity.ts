import { EntitySchema } from 'typeorm';
import JobRequest from '../../../domain/models/jobRequest.model';

const JobRequestEntity = new EntitySchema<JobRequest>({
    name: 'job_request',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        jobFunction: {
            type: String,
        },
    },
    relations: {
        client: {
            type: 'many-to-one',
            target: 'client',
            joinColumn: true,
        },
        candidacies: {
            type: 'one-to-many',
            target: 'candidacy',
            inverseSide: 'jobRequest',
        },
    },
});

export default JobRequestEntity;
