import GetAllPlacementsUseCase from './getAllPlacements';
import GetPlacementByIdUseCase from './getPlacementById';
import CreatePlacementUseCase from './createPlacement';
import UpdatePlacementUseCase from './updatePlacement';
import DeletePlacementUseCase from './deletePlacement';
import PlacementORM from '../../repositories/Placement/repositoryORM';
import {
    CreatePlacementParams,
    DeletePlacementParams,
    GetPlacementByIdParams,
    UpdatePlacementParams,
} from '../../repositories/Placement';

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
