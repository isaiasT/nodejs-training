import GetAllJobRequestsUseCase from './getAllJobRequests.usecase';
import GetJobRequestByIdUseCase from './getJobRequestById.usecase';
import CreateJobRequestUseCase from './createJobRequest.usecase';
import UpdateJobRequestUseCase from './updateJobRequest.usecase';
import DeleteJobRequestUseCase from './deleteJobRequest.usecase';
import JobRequestORM from '../../infra/adapters/repositories/jobRequest.repository';
import {
    CreateJobRequestParams,
    DeleteJobRequestParams,
    GetJobRequestByIdParams,
    UpdateJobRequestParams,
} from '../../domain/repositories/jobRequest.repository';

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
