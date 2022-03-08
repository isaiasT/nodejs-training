import ClientRepository, {
    UpdateClientParams,
} from '../../domain/repositories/client.repository';

const UpdateClient = async (
    repository: ClientRepository,
    params: UpdateClientParams,
) => {
    const client = await repository.updateClient(params);
    return client;
};

export default UpdateClient;
