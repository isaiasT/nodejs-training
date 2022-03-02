import ClientRepository, {
    GetClientByIdParams,
} from '../../repositories/Client';

const GetClientById = async (
    repository: ClientRepository,
    params: GetClientByIdParams,
) => {
    const client = await repository.getClientById(params);
    return client;
};

export default GetClientById;
