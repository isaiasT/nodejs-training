import PlacementRepository, {
    DeletePlacementParams,
} from '../../domain/repositories/placement.repository';

const GetPlacementById = async (
    repository: PlacementRepository,
    params: DeletePlacementParams,
) => {
    const results = await repository.deletePlacement(params);
    return results;
};

export default GetPlacementById;
