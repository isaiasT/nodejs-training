import CandidacyRepository, {
    CreateCandidacyParams,
} from '../../domain/repositories/candidacy.repository';

const CreateCandidacy = async (
    repository: CandidacyRepository,
    params: CreateCandidacyParams,
) => {
    const client = await repository.createCandidacy(params);
    return client;
};

export default CreateCandidacy;
