import UserRepository, {
    CreateUserParams,
} from '../../domain/repositories/user.repository';

const CreateUser = async (
    repository: UserRepository,
    params: CreateUserParams,
) => {
    const user = await repository.createUser(params);
    return user;
};

export default CreateUser;
