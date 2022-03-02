import PlacementRepository, {
    UpdatePlacementParams,
} from '../../repositories/Placement';

const UpdatePlacement = async (
    repository: PlacementRepository,
    params: UpdatePlacementParams,
) => {
    const placement = await repository.updatePlacement(params);
    return placement;
};

export default UpdatePlacement;
