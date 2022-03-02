import PlacementRepository, {
    DeletePlacementParams,
} from '../../repositories/Placement';

const GetPlacementById = async (
    repository: PlacementRepository,
    params: DeletePlacementParams,
) => {
    const results = await repository.deletePlacement(params);
    return results;
};

export default GetPlacementById;
