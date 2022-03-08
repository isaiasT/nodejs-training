import PlacementRepository, {
    CreatePlacementParams,
} from '../../domain/repositories/placement.repository';

const CreatePlacement = async (
    repository: PlacementRepository,
    params: CreatePlacementParams,
) => {
    const placement = await repository.createPlacement(params);
    return placement;
};

export default CreatePlacement;
