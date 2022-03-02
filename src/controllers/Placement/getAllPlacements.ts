import { GetAllPlacements } from '../../core/useCases/Placement';
import { Response, Request } from 'express';

const GetAllPlacementsController = async (_req: Request, res: Response) => {
    const placements = await GetAllPlacements();
    res.json(placements);
};

export default GetAllPlacementsController;
