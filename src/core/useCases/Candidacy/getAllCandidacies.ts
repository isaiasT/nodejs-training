import CandidacyRepository from '../../repositories/Candidacy';

const GetAllCandidacies = async (repository: CandidacyRepository) => {
    const candidacies = await repository.getAllCandidacies();
    return candidacies;
};

export default GetAllCandidacies;
