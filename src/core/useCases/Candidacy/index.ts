import GetAllCandidaciesUseCase from './getAllCandidacies';
import GetCandidacyByIdUseCase from './getCandidacyById';
import CreateCandidacyUseCase from './createCandidacy';
import UpdateCandidacyUseCase from './updateCandidacy';
import DeleteCandidacyUseCase from './deleteCandidacy';
import CandidacyORM from '../../repositories/Candidacy/repositoryORM';
import {
    CreateCandidacyParams,
    DeleteCandidacyParams,
    GetCandidacyByIdParams,
    UpdateCandidacyParams,
} from '../../repositories/Candidacy';

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
