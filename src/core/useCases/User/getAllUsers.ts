import UserRepository from '../../repositories/User';

const GetAllUsers = async (repository: UserRepository) => {
    const users = await repository.getAllUsers();
    return users;
};

export default GetAllUsers;
