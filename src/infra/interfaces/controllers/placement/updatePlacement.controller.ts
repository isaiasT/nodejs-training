import { UpdatePlacement } from '../../../../application/placement';
import { Response, Request } from 'express';

const UpdatePlacementController = async (req: Request, res: Response) => {
    const results = await UpdatePlacement({
        id: req.params.id,
        user: req.body.user,
        client: req.body.client,
        candidacy: req.body.candidacy,
    });

    if (results.error) {
        res.status(400).json(results);
    } else {
        res.json(results.placement);
    }
};

export default UpdatePlacementController;
