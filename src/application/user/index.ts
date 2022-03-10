import GetAllUsersUseCase from './getAllUsers.usecase';
import GetUserByIdUseCase from './getUserById.usecase';
import RegisterUserUseCase from './registerUser.usecase';
import UpdateUserUseCase from './updateUser.usecase';
import DeleteUserUseCase from './deleteUser.usecase';
import UserORM from '../../infra/adapters/repositories/user.repository';
import {
    RegisterUserParams,
    DeleteUserParams,
    GetUserByIdParams,
    UpdateUserParams,
} from '../../domain/repositories/user.repository';

const userRepository = UserORM();

export const GetAllUsers = () => GetAllUsersUseCase(userRepository);
export const GetUserById = (params: GetUserByIdParams) =>
    GetUserByIdUseCase(userRepository, params);
export const RegisterUser = (params: RegisterUserParams) =>
    RegisterUserUseCase(userRepository, params);
export const UpdateUser = (params: UpdateUserParams) =>
    UpdateUserUseCase(userRepository, params);
export const DeleteUser = (params: DeleteUserParams) =>
    DeleteUserUseCase(userRepository, params);
