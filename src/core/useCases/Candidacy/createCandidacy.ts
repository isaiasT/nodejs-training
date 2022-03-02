import CandidacyRepository, {
    CreateCandidacyParams,
} from '../../repositories/Candidacy';

const CreateCandidacy = async (
    repository: CandidacyRepository,
    params: CreateCandidacyParams,
) => {
    const client = await repository.createCandidacy(params);
    return client;
};

export default CreateCandidacy;
