import ClientRepository, {
    GetClientByIdParams,
} from '../../domain/repositories/client.repository';

const GetClientById = async (
    repository: ClientRepository,
    params: GetClientByIdParams,
) => {
    const client = await repository.getClientById(params);
    return client;
};

export default GetClientById;
