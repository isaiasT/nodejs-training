import UserRepository from '../../domain/repositories/user.repository';

const GetAllUsers = async (repository: UserRepository) => {
    const users = await repository.getAllUsers();
    return users;
};

export default GetAllUsers;
