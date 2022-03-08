import UserRepository, {
    UpdateUserParams,
} from '../../domain/repositories/user.repository';

const UpdateUser = async (
    repository: UserRepository,
    params: UpdateUserParams,
) => {
    const user = await repository.updateUser(params);
    return user;
};

export default UpdateUser;
