import JobRequestRepository, {
    DeleteJobRequestParams,
} from '../../repositories/JobRequest';

const GetJobRequestById = async (
    repository: JobRequestRepository,
    params: DeleteJobRequestParams,
) => {
    const results = await repository.deleteJobRequest(params);
    return results;
};

export default GetJobRequestById;
