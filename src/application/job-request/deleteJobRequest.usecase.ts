import JobRequestRepository, {
    DeleteJobRequestParams,
} from '../../domain/repositories/jobRequest.repository';

const GetJobRequestById = async (
    repository: JobRequestRepository,
    params: DeleteJobRequestParams,
) => {
    const results = await repository.deleteJobRequest(params);
    return results;
};

export default GetJobRequestById;
