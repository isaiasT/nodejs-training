import ClientRepository from '../../repositories/Client';

const GetAllClients = async (repository: ClientRepository) => {
    const clients = await repository.getAllClients();
    return clients;
};

export default GetAllClients;
