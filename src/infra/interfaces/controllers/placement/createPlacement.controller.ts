import { CreatePlacement } from '../../../../application/placement';
import { Response, Request } from 'express';

const CreatePlacementController = async (req: Request, res: Response) => {
    const results = await CreatePlacement({
        user: req.body.user,
        client: req.body.client,
        candidacy: req.body.candidacy,
    });
    res.json(results);
};

export default CreatePlacementController;
