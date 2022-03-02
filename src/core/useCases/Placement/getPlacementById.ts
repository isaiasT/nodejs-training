import PlacementRepository, {
    GetPlacementByIdParams,
} from '../../repositories/Placement';

const GetPlacementById = async (
    repository: PlacementRepository,
    params: GetPlacementByIdParams,
) => {
    const placement = await repository.getPlacementById(params);
    return placement;
};

export default GetPlacementById;
