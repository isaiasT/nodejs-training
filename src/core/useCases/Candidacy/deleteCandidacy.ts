import CandidacyRepository, {
    DeleteCandidacyParams,
} from '../../repositories/Candidacy';

const GetCandidacyById = async (
    repository: CandidacyRepository,
    params: DeleteCandidacyParams,
) => {
    const results = await repository.deleteCandidacy(params);
    return results;
};

export default GetCandidacyById;
