import GetAllUsersUseCase from './User/getAllUsers';
import GetUserByIdUseCase from './User/getUserById';
import CreateUserUseCase from './User/createUser';
import UpdateUserUseCase from './User/updateUser';
import DeleteUserUseCase from './User/deleteUser';
import UserORM from '../repositories/User/repositoryORM';
import {
    CreateUserParams,
    DeleteUserParams,
    GetUserByIdParams,
    UpdateUserParams,
} from '../repositories/User';

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
