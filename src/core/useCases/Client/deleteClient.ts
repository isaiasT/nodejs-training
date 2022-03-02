import ClientRepository, {
    DeleteClientParams,
} from '../../repositories/Client';

const GetClientById = async (
    repository: ClientRepository,
    params: DeleteClientParams,
) => {
    const results = await repository.deleteClient(params);
    return results;
};

export default GetClientById;
