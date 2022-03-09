import { DeletePlacement } from '../../../../application/placement';
import { Response, Request } from 'express';

const DeletePlacementController = async (req: Request, res: Response) => {
    const results = await DeletePlacement({ id: req.params.id });

    if (results.affected) {
        res.json(results);
    } else {
        res.status(400).json({ error: "Placement doesn't exist" });
    }
};

export default DeletePlacementController;
