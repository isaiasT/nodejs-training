import { CreateCandidacy } from '../../../../application/candidacy';
import { Response, Request } from 'express';

const CreateCandidacyController = async (req: Request, res: Response) => {
    const results = await CreateCandidacy({
        jobRequest: req.body.jobRequest,
        user: req.body.user,
        status: req.body.status,
    });
    res.json(results);
};

export default CreateCandidacyController;
