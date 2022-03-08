import ClientRepository from '../../domain/repositories/client.repository';

const GetAllClients = async (repository: ClientRepository) => {
    const clients = await repository.getAllClients();
    return clients;
};

export default GetAllClients;
