import ClientRepository, {
    CreateClientParams,
} from '../../domain/repositories/client.repository';

const CreateClient = async (
    repository: ClientRepository,
    params: CreateClientParams,
) => {
    const client = await repository.createClient(params);
    return client;
};

export default CreateClient;
