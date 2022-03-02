import CandidacyRepository, {
    UpdateCandidacyParams,
} from '../../repositories/Candidacy';

const UpdateCandidacy = async (
    repository: CandidacyRepository,
    params: UpdateCandidacyParams,
) => {
    const client = await repository.updateCandidacy(params);
    return client;
};

export default UpdateCandidacy;
