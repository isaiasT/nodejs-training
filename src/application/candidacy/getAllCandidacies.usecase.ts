import CandidacyRepository from '../../domain/repositories/candidacy.repository';

const GetAllCandidacies = async (repository: CandidacyRepository) => {
    const candidacies = await repository.getAllCandidacies();
    return candidacies;
};

export default GetAllCandidacies;
