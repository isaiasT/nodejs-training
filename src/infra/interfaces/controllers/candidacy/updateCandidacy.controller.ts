import { UpdateCandidacy } from '../../../../application/candidacy';
import { Response, Request } from 'express';

const UpdateCandidacyController = async (req: Request, res: Response) => {
    const results = await UpdateCandidacy({
        id: req.params.id,
        jobRequest: req.body.jobRequest,
        user: req.body.user,
        status: req.body.status,
    });

    if (results.error) {
        res.status(400).json(results);
    } else {
        res.json(results.candidacy);
    }
};

export default UpdateCandidacyController;
