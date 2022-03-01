import UserRepository, {
    GetUserByIdParams,
    CreateUserParams,
    UpdateUserParams,
    DeleteUserParams,
} from './index';
import User from '../../entities/User';
import { getConnection } from 'typeorm';
import _ from 'lodash';

class UserORM implements UserRepository {
    getAllUsers = async () => {
        const repositoryORM = getConnection().getRepository(User);
        const users = await repositoryORM.find();
        return users;
    };

    getUserById = async (params: GetUserByIdParams) => {
        const repositoryORM = getConnection().getRepository(User);
        const user = await repositoryORM.findOne(params.id);
        return user;
    };

    createUser = async (params: CreateUserParams) => {
        const repositoryORM = getConnection().getRepository(User);
        const user = await repositoryORM.create(params);
        const results = await repositoryORM.save(user);
        return results;
    };

    updateUser = async (params: UpdateUserParams) => {
        const repositoryORM = getConnection().getRepository(User);
        const user = await repositoryORM.findOne(params.id);
        repositoryORM.merge(user, _.omit(params, 'id'));
        const results = await repositoryORM.save(user);
        return results;
    };

    deleteUser = async (params: DeleteUserParams) => {
        const repositoryORM = getConnection().getRepository(User);
        const results = await repositoryORM.delete(params.id);
        return results;
    };
}

export default UserORM;
