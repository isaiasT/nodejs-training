import { GetPlacementById } from '../../../../application/placement';
import { Response, Request } from 'express';

const GetPlacementByIdController = async (req: Request, res: Response) => {
    const placement = await GetPlacementById({ id: req.params.id });
    res.json(placement);
};

export default GetPlacementByIdController;
