import UserRepository, {
    GetUserByIdParams,
    RegisterUserParams,
    UpdateUserParams,
    DeleteUserParams,
} from '../../../domain/repositories/user.repository';
import User from '../../../domain/models/user.model';
import UserEntity from '../entities/user.entity';
import { getConnection } from 'typeorm';
import _ from 'lodash';

const UserORM = (): UserRepository => {
    return {
        getAllUsers: async () => {
            const repositoryORM =
                getConnection().getRepository<User>(UserEntity);
            const users = await repositoryORM.find();
            return users;
        },

        getUserById: async (params: GetUserByIdParams) => {
            const repositoryORM =
                getConnection().getRepository<User>(UserEntity);
            const user = await repositoryORM.findOne(params.id);
            return user;
        },

        registerUser: async (params: RegisterUserParams) => {
            const repositoryORM =
                getConnection().getRepository<User>(UserEntity);
            const user = await repositoryORM.create(params);
            const results = await repositoryORM.save(user);
            return _.omit(results, 'password');
        },

        updateUser: async (params: UpdateUserParams) => {
            const repositoryORM =
                getConnection().getRepository<User>(UserEntity);
            const user = await repositoryORM.findOne(params.id);
            if (user) {
                repositoryORM.merge(user, _.omit(params, 'id'));
                const results = await repositoryORM.save(user);
                return { user: results };
            }
            return { error: "User doesn't exist" };
        },

        deleteUser: async (params: DeleteUserParams) => {
            const repositoryORM =
                getConnection().getRepository<User>(UserEntity);
            const results = await repositoryORM.delete(params.id);
            return results;
        },
    };
};

export default UserORM;
