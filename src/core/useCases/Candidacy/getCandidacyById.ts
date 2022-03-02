import CandidacyRepository, {
    GetCandidacyByIdParams,
} from '../../repositories/Candidacy';

const GetCandidacyById = async (
    repository: CandidacyRepository,
    params: GetCandidacyByIdParams,
) => {
    const client = await repository.getCandidacyById(params);
    return client;
};

export default GetCandidacyById;
