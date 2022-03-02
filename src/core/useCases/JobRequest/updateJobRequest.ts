import JobRequestRepository, {
    UpdateJobRequestParams,
} from '../../repositories/JobRequest';

const UpdateJobRequest = async (
    repository: JobRequestRepository,
    params: UpdateJobRequestParams,
) => {
    const jobRequest = await repository.updateJobRequest(params);
    return jobRequest;
};

export default UpdateJobRequest;
