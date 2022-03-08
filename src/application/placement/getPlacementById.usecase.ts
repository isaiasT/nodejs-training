import PlacementRepository, {
    GetPlacementByIdParams,
} from '../../domain/repositories/placement.repository';

const GetPlacementById = async (
    repository: PlacementRepository,
    params: GetPlacementByIdParams,
) => {
    const placement = await repository.getPlacementById(params);
    return placement;
};

export default GetPlacementById;
