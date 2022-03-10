import { DeleteResult } from 'typeorm';
import User from '../models/user.model';

export type GetUserByIdParams = {
    id: string;
};

export type CreateUserParams = {
    id?: string;
    name: string;
    availability: string;
    email: string;
    country: string;
    password: string;
};

export type UpdateUserParams = {
    id: string;
    name?: string;
    availability?: string;
    email?: string;
    country?: string;
    password?: string;
};

export type DeleteUserParams = {
    id: string;
};

export type UserResponse = {
    user?: User;
    error?: string;
};

export default interface UserRepository {
    getAllUsers(): Promise<User[]>;
    getUserById(params: GetUserByIdParams): Promise<User>;
    createUser(params: CreateUserParams): Promise<User>;
    updateUser(params: UpdateUserParams): Promise<UserResponse>;
    deleteUser(params: DeleteUserParams): Promise<DeleteResult>;
}
