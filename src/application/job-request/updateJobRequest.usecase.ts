import JobRequestRepository, {
    UpdateJobRequestParams,
} from '../../domain/repositories/jobRequest.repository';

const UpdateJobRequest = async (
    repository: JobRequestRepository,
    params: UpdateJobRequestParams,
) => {
    const jobRequest = await repository.updateJobRequest(params);
    return jobRequest;
};

export default UpdateJobRequest;
