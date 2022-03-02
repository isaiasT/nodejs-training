import GetAllUsersUseCase from './User/getAllUsers';
import GetUserByIdUseCase from './User/getUserById';
import CreateUserUseCase from './User/createUser';
import UpdateUserUseCase from './User/updateUser';
import DeleteUserUseCase from './User/deleteUser';
import UserORM from '../repositories/User/repositoryORM';
import GetAllClientsUseCase from './Client/getAllClients';
import GetClientByIdUseCase from './Client/getClientById';
import CreateClientUseCase from './Client/createClient';
import UpdateClientUseCase from './Client/updateClient';
import DeleteClientUseCase from './Client/deleteClient';
import ClientORM from '../repositories/Client/repositoryORM';
import GetAllJobRequestsUseCase from './JobRequest/getAllJobRequests';
import GetJobRequestByIdUseCase from './JobRequest/getJobRequestById';
import CreateJobRequestUseCase from './JobRequest/createJobRequest';
import UpdateJobRequestUseCase from './JobRequest/updateJobRequest';
import DeleteJobRequestUseCase from './JobRequest/deleteJobRequest';
import JobRequestORM from '../repositories/JobRequest/repositoryORM';
import {
    CreateUserParams,
    DeleteUserParams,
    GetUserByIdParams,
    UpdateUserParams,
} from '../repositories/User';
import {
    CreateClientParams,
    DeleteClientParams,
    GetClientByIdParams,
    UpdateClientParams,
} from '../repositories/Client';
import {
    CreateJobRequestParams,
    DeleteJobRequestParams,
    GetJobRequestByIdParams,
    UpdateJobRequestParams,
} from '../repositories/JobRequest';

const userRepository = new UserORM();
const clientRepository = new ClientORM();
const jobRequestRepository = new JobRequestORM();

export const GetAllUsers = () => GetAllUsersUseCase(userRepository);
export const GetUserById = (params: GetUserByIdParams) =>
    GetUserByIdUseCase(userRepository, params);
export const CreateUser = (params: CreateUserParams) =>
    CreateUserUseCase(userRepository, params);
export const UpdateUser = (params: UpdateUserParams) =>
    UpdateUserUseCase(userRepository, params);
export const DeleteUser = (params: DeleteUserParams) =>
    DeleteUserUseCase(userRepository, params);

export const GetAllClients = () => GetAllClientsUseCase(clientRepository);
export const GetClientById = (params: GetClientByIdParams) =>
    GetClientByIdUseCase(clientRepository, params);
export const CreateClient = (params: CreateClientParams) =>
    CreateClientUseCase(clientRepository, params);
export const UpdateClient = (params: UpdateClientParams) =>
    UpdateClientUseCase(clientRepository, params);
export const DeleteClient = (params: DeleteClientParams) =>
    DeleteClientUseCase(clientRepository, params);

export const GetAllJobRequests = () =>
    GetAllJobRequestsUseCase(jobRequestRepository);
export const GetJobRequestById = (params: GetJobRequestByIdParams) =>
    GetJobRequestByIdUseCase(jobRequestRepository, params);
export const CreateJobRequest = (params: CreateJobRequestParams) =>
    CreateJobRequestUseCase(jobRequestRepository, params);
export const UpdateJobRequest = (params: UpdateJobRequestParams) =>
    UpdateJobRequestUseCase(jobRequestRepository, params);
export const DeleteJobRequest = (params: DeleteJobRequestParams) =>
    DeleteJobRequestUseCase(jobRequestRepository, params);
