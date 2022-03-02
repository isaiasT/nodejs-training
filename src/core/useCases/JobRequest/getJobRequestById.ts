import JobRequestRepository, {
    GetJobRequestByIdParams,
} from '../../repositories/JobRequest';

const GetJobRequestById = async (
    repository: JobRequestRepository,
    params: GetJobRequestByIdParams,
) => {
    const jobRequest = await repository.getJobRequestById(params);
    return jobRequest;
};

export default GetJobRequestById;
