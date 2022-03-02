import PlacementRepository, {
    CreatePlacementParams,
} from '../../repositories/Placement';

const CreatePlacement = async (
    repository: PlacementRepository,
    params: CreatePlacementParams,
) => {
    const placement = await repository.createPlacement(params);
    return placement;
};

export default CreatePlacement;
