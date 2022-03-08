import PlacementRepository from '../../domain/repositories/placement.repository';

const GetAllPlacements = async (repository: PlacementRepository) => {
    const placements = await repository.getAllPlacements();
    return placements;
};

export default GetAllPlacements;
