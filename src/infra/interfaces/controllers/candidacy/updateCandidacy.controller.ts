import { UpdateCandidacy } from '../../../../application/candidacy';
import { Response, Request } from 'express';

const UpdateCandidacyController = async (req: Request, res: Response) => {
    const results = await UpdateCandidacy({
        id: req.params.id,
        jobRequest: req.body.jobRequest,
        user: req.body.user,
        status: req.body.status,
    });
    res.json(results);
};

export default UpdateCandidacyController;
