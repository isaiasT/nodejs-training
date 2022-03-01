import UserRepository, { DeleteUserParams } from '../../repositories/User';

const GetUserById = async (
    repository: UserRepository,
    params: DeleteUserParams,
) => {
    const results = await repository.deleteUser(params);
    return results;
};

export default GetUserById;
