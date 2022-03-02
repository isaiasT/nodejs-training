import ClientRepository, {
    CreateClientParams,
} from '../../repositories/Client';

const CreateClient = async (
    repository: ClientRepository,
    params: CreateClientParams,
) => {
    const client = await repository.createClient(params);
    return client;
};

export default CreateClient;
