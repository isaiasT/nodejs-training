import JobRequestRepository from '../../domain/repositories/jobRequest.repository';

const GetAllJobRequests = async (repository: JobRequestRepository) => {
    const jobRequests = await repository.getAllJobRequests();
    return jobRequests;
};

export default GetAllJobRequests;
