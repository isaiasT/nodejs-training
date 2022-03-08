import { DeletePlacement } from '../../../../application/placement';
import { Response, Request } from 'express';

const DeletePlacementController = async (req: Request, res: Response) => {
    const results = await DeletePlacement({ id: req.params.id });
    res.json(results);
};

export default DeletePlacementController;
