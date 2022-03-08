import ClientRepository, {
    DeleteClientParams,
} from '../../domain/repositories/client.repository';

const GetClientById = async (
    repository: ClientRepository,
    params: DeleteClientParams,
) => {
    const results = await repository.deleteClient(params);
    return results;
};

export default GetClientById;
