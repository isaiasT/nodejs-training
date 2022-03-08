import JobRequestRepository, {
    GetJobRequestByIdParams,
    CreateJobRequestParams,
    UpdateJobRequestParams,
    DeleteJobRequestParams,
} from '../../../domain/repositories/jobRequest.repository';
import JobRequest from '../entities/jobRequest.entity';
import { getConnection } from 'typeorm';
import _ from 'lodash';

class JobRequestORM implements JobRequestRepository {
    getAllJobRequests = async () => {
        const repositoryORM = getConnection().getRepository(JobRequest);
        const jobRequests = await repositoryORM.find({ relations: ['client'] });
        return jobRequests;
    };

    getJobRequestById = async (params: GetJobRequestByIdParams) => {
        const repositoryORM = getConnection().getRepository(JobRequest);
        const jobRequest = await repositoryORM.findOne(params.id, {
            relations: ['client'],
        });
        return jobRequest;
    };

    createJobRequest = async (params: CreateJobRequestParams) => {
        const repositoryORM = getConnection().getRepository(JobRequest);
        const jobRequest = await repositoryORM.create(params);
        const results = await repositoryORM.save(jobRequest);
        return results;
    };

    updateJobRequest = async (params: UpdateJobRequestParams) => {
        const repositoryORM = getConnection().getRepository(JobRequest);
        const jobRequest = await repositoryORM.findOne(params.id, {
            relations: ['client'],
        });
        repositoryORM.merge(jobRequest, _.omit(params, 'id'));
        const results = await repositoryORM.save(jobRequest);
        return results;
    };

    deleteJobRequest = async (params: DeleteJobRequestParams) => {
        const repositoryORM = getConnection().getRepository(JobRequest);
        const results = await repositoryORM.delete(params.id);
        return results;
    };
}

export default JobRequestORM;
