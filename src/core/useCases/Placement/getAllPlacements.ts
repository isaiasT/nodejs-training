import PlacementRepository from '../../repositories/Placement';

const GetAllPlacements = async (repository: PlacementRepository) => {
    const placements = await repository.getAllPlacements();
    return placements;
};

export default GetAllPlacements;
