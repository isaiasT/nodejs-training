import { GetCandidacyById } from '../../../../application/candidacy';
import { Response, Request } from 'express';

const GetCandidacyByIdController = async (req: Request, res: Response) => {
    const candidacy = await GetCandidacyById({ id: req.params.id });
    res.json(candidacy);
};

export default GetCandidacyByIdController;
