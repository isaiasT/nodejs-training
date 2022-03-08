import GetAllCandidaciesUseCase from './getAllCandidacies.usecase';
import GetCandidacyByIdUseCase from './getCandidacyById.usecase';
import CreateCandidacyUseCase from './createCandidacy.usecase';
import UpdateCandidacyUseCase from './updateCandidacy.usecase';
import DeleteCandidacyUseCase from './deleteCandidacy.usecase';
import CandidacyORM from '../../infra/adapters/repositories/candidacy.repository';
import {
    CreateCandidacyParams,
    DeleteCandidacyParams,
    GetCandidacyByIdParams,
    UpdateCandidacyParams,
} from '../../domain/repositories/candidacy.repository';

const clientRepository = new CandidacyORM();

export const GetAllCandidacies = () =>
    GetAllCandidaciesUseCase(clientRepository);
export const GetCandidacyById = (params: GetCandidacyByIdParams) =>
    GetCandidacyByIdUseCase(clientRepository, params);
export const CreateCandidacy = (params: CreateCandidacyParams) =>
    CreateCandidacyUseCase(clientRepository, params);
export const UpdateCandidacy = (params: UpdateCandidacyParams) =>
    UpdateCandidacyUseCase(clientRepository, params);
export const DeleteCandidacy = (params: DeleteCandidacyParams) =>
    DeleteCandidacyUseCase(clientRepository, params);
