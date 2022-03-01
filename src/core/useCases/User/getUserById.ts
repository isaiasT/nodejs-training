import UserRepository, { GetUserByIdParams } from '../../repositories/User';

const GetUserById = async (
    repository: UserRepository,
    params: GetUserByIdParams,
) => {
    const user = await repository.getUserById(params);
    return user;
};

export default GetUserById;
