import PlacementRepository, {
    UpdatePlacementParams,
} from '../../domain/repositories/placement.repository';

const UpdatePlacement = async (
    repository: PlacementRepository,
    params: UpdatePlacementParams,
) => {
    const placement = await repository.updatePlacement(params);
    return placement;
};

export default UpdatePlacement;
