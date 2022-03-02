import { GetCandidacyById } from '../../core/useCases/Candidacy';
import { Response, Request } from 'express';

const GetCandidacyByIdController = async (req: Request, res: Response) => {
    const user = await GetCandidacyById({ id: req.params.id });
    res.json(user);
};

export default GetCandidacyByIdController;
