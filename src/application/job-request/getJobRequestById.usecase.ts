import JobRequestRepository, {
    GetJobRequestByIdParams,
} from '../../domain/repositories/jobRequest.repository';

const GetJobRequestById = async (
    repository: JobRequestRepository,
    params: GetJobRequestByIdParams,
) => {
    const jobRequest = await repository.getJobRequestById(params);
    return jobRequest;
};

export default GetJobRequestById;
