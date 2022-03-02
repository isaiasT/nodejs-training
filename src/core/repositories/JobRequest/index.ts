import { DeleteResult } from 'typeorm';
import Client from '../../entities/Client';
import JobRequest from '../../entities/JobRequest';

export type GetJobRequestByIdParams = {
    id: string;
};

export type CreateJobRequestParams = {
    client: Client;
    jobFunction: string;
};

export type UpdateJobRequestParams = {
    id: string;
    jobFunction?: string;
};

export type DeleteJobRequestParams = {
    id: string;
};

export default interface JobRequestRepository {
    getAllJobRequests(): Promise<JobRequest[]>;
    getJobRequestById(params: GetJobRequestByIdParams): Promise<JobRequest>;
    createJobRequest(params: CreateJobRequestParams): Promise<JobRequest>;
    updateJobRequest(params: UpdateJobRequestParams): Promise<JobRequest>;
    deleteJobRequest(params: DeleteJobRequestParams): Promise<DeleteResult>;
}
