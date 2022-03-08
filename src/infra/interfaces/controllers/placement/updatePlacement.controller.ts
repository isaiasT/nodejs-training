import { UpdatePlacement } from '../../../../application/placement';
import { Response, Request } from 'express';

const UpdatePlacementController = async (req: Request, res: Response) => {
    const results = await UpdatePlacement({
        id: req.params.id,
        user: req.body.user,
        client: req.body.client,
        candidacy: req.body.candidacy,
    });
    res.json(results);
};

export default UpdatePlacementController;
