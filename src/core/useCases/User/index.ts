import GetAllUsersUseCase from './getAllUsers';
import GetUserByIdUseCase from './getUserById';
import CreateUserUseCase from './createUser';
import UpdateUserUseCase from './updateUser';
import DeleteUserUseCase from './deleteUser';
import UserORM from '../../repositories/User/repositoryORM';
import {
    CreateUserParams,
    DeleteUserParams,
    GetUserByIdParams,
    UpdateUserParams,
} from '../../repositories/User';

const userRepository = new UserORM();

export const GetAllUsers = () => GetAllUsersUseCase(userRepository);
export const GetUserById = (params: GetUserByIdParams) =>
    GetUserByIdUseCase(userRepository, params);
export const CreateUser = (params: CreateUserParams) =>
    CreateUserUseCase(userRepository, params);
export const UpdateUser = (params: UpdateUserParams) =>
    UpdateUserUseCase(userRepository, params);
export const DeleteUser = (params: DeleteUserParams) =>
    DeleteUserUseCase(userRepository, params);
