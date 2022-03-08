import JobRequestRepository, {
    CreateJobRequestParams,
} from '../../domain/repositories/jobRequest.repository';

const CreateJobRequest = async (
    repository: JobRequestRepository,
    params: CreateJobRequestParams,
) => {
    const jobRequest = await repository.createJobRequest(params);
    return jobRequest;
};

export default CreateJobRequest;
