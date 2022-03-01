import { DeleteResult } from 'typeorm';
import User from '../../entities/User';

export type GetUserByIdParams = {
    id: string;
};

export type CreateUserParams = {
    firstName: string;
    lastName: string;
    email: string;
};

export type UpdateUserParams = {
    id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
};

export type DeleteUserParams = {
    id: string;
};

export default interface UserRepository {
    getAllUsers(): Promise<User[]>;
    getUserById(params: GetUserByIdParams): Promise<User>;
    createUser(params: CreateUserParams): Promise<User>;
    updateUser(params: UpdateUserParams): Promise<User>;
    deleteUser(params: DeleteUserParams): Promise<DeleteResult>;
}
