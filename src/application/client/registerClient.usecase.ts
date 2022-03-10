import ClientRepository, {
    RegisterClientParams,
} from '../../domain/repositories/client.repository';

const RegisterClient = async (
    repository: ClientRepository,
    params: RegisterClientParams,
) => {
    const client = await repository.registerClient(params);
    return client;
};

export default RegisterClient;
