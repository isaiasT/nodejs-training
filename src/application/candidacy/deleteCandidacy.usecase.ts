import CandidacyRepository, {
    DeleteCandidacyParams,
} from '../../domain/repositories/candidacy.repository';

const GetCandidacyById = async (
    repository: CandidacyRepository,
    params: DeleteCandidacyParams,
) => {
    const results = await repository.deleteCandidacy(params);
    return results;
};

export default GetCandidacyById;
