import UserRepository, {
    RegisterUserParams,
} from '../../domain/repositories/user.repository';

const RegisterUser = async (
    repository: UserRepository,
    params: RegisterUserParams,
) => {
    const user = await repository.registerUser(params);
    return user;
};

export default RegisterUser;
