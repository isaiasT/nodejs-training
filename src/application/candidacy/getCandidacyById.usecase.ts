import CandidacyRepository, {
    GetCandidacyByIdParams,
} from '../../domain/repositories/candidacy.repository';

const GetCandidacyById = async (
    repository: CandidacyRepository,
    params: GetCandidacyByIdParams,
) => {
    const client = await repository.getCandidacyById(params);
    return client;
};

export default GetCandidacyById;
