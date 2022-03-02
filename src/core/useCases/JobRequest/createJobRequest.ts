import JobRequestRepository, {
    CreateJobRequestParams,
} from '../../repositories/JobRequest';

const CreateJobRequest = async (
    repository: JobRequestRepository,
    params: CreateJobRequestParams,
) => {
    const jobRequest = await repository.createJobRequest(params);
    return jobRequest;
};

export default CreateJobRequest;
