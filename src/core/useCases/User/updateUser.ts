import UserRepository, { UpdateUserParams } from '../../repositories/User';

const UpdateUser = async (
    repository: UserRepository,
    params: UpdateUserParams,
) => {
    const user = await repository.updateUser(params);
    return user;
};

export default UpdateUser;
