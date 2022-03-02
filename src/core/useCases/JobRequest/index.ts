import GetAllJobRequestsUseCase from './getAllJobRequests';
import GetJobRequestByIdUseCase from './getJobRequestById';
import CreateJobRequestUseCase from './createJobRequest';
import UpdateJobRequestUseCase from './updateJobRequest';
import DeleteJobRequestUseCase from './deleteJobRequest';
import JobRequestORM from '../../repositories/JobRequest/repositoryORM';
import {
    CreateJobRequestParams,
    DeleteJobRequestParams,
    GetJobRequestByIdParams,
    UpdateJobRequestParams,
} from '../../repositories/JobRequest';

const jobRequestRepository = new JobRequestORM();

export const GetAllJobRequests = () =>
    GetAllJobRequestsUseCase(jobRequestRepository);
export const GetJobRequestById = (params: GetJobRequestByIdParams) =>
    GetJobRequestByIdUseCase(jobRequestRepository, params);
export const CreateJobRequest = (params: CreateJobRequestParams) =>
    CreateJobRequestUseCase(jobRequestRepository, params);
export const UpdateJobRequest = (params: UpdateJobRequestParams) =>
    UpdateJobRequestUseCase(jobRequestRepository, params);
export const DeleteJobRequest = (params: DeleteJobRequestParams) =>
    DeleteJobRequestUseCase(jobRequestRepository, params);
