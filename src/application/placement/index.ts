import GetAllPlacementsUseCase from './getAllPlacements.usecase';
import GetPlacementByIdUseCase from './getPlacementById.usecase';
import CreatePlacementUseCase from './createPlacement.usecase';
import UpdatePlacementUseCase from './updatePlacement.usecase';
import DeletePlacementUseCase from './deletePlacement.usecase';
import PlacementORM from '../../infra/adapters/repositories/placement.repository';
import {
    CreatePlacementParams,
    DeletePlacementParams,
    GetPlacementByIdParams,
    UpdatePlacementParams,
} from '../../domain/repositories/placement.repository';

const placementRepository = new PlacementORM();

export const GetAllPlacements = () =>
    GetAllPlacementsUseCase(placementRepository);
export const GetPlacementById = (params: GetPlacementByIdParams) =>
    GetPlacementByIdUseCase(placementRepository, params);
export const CreatePlacement = (params: CreatePlacementParams) =>
    CreatePlacementUseCase(placementRepository, params);
export const UpdatePlacement = (params: UpdatePlacementParams) =>
    UpdatePlacementUseCase(placementRepository, params);
export const DeletePlacement = (params: DeletePlacementParams) =>
    DeletePlacementUseCase(placementRepository, params);
