import UserRepository, {
    DeleteUserParams,
} from '../../domain/repositories/user.repository';

const GetUserById = async (
    repository: UserRepository,
    params: DeleteUserParams,
) => {
    const results = await repository.deleteUser(params);
    return results;
};

export default GetUserById;
