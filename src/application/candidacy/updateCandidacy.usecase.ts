import CandidacyRepository, {
    UpdateCandidacyParams,
} from '../../domain/repositories/candidacy.repository';

const UpdateCandidacy = async (
    repository: CandidacyRepository,
    params: UpdateCandidacyParams,
) => {
    const client = await repository.updateCandidacy(params);
    return client;
};

export default UpdateCandidacy;
