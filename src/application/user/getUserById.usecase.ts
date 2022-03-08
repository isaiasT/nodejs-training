import UserRepository, {
    GetUserByIdParams,
} from '../../domain/repositories/user.repository';

const GetUserById = async (
    repository: UserRepository,
    params: GetUserByIdParams,
) => {
    const user = await repository.getUserById(params);
    return user;
};

export default GetUserById;
