import UserRepository, { CreateUserParams } from '../../repositories/User';

const CreateUser = async (
    repository: UserRepository,
    params: CreateUserParams,
) => {
    const user = await repository.createUser(params);
    return user;
};

export default CreateUser;
