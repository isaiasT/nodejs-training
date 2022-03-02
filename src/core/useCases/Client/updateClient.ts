import ClientRepository, {
    UpdateClientParams,
} from '../../repositories/Client';

const UpdateClient = async (
    repository: ClientRepository,
    params: UpdateClientParams,
) => {
    const client = await repository.updateClient(params);
    return client;
};

export default UpdateClient;
