import JobRequestRepository from '../../repositories/JobRequest';

const GetAllJobRequests = async (repository: JobRequestRepository) => {
    const jobRequests = await repository.getAllJobRequests();
    return jobRequests;
};

export default GetAllJobRequests;
