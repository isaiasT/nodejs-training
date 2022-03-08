import { GetAllCandidacies } from '../../../../application/candidacy';
import { Response, Request } from 'express';

const GetAllCandidaciesController = async (_req: Request, res: Response) => {
    const candidacies = await GetAllCandidacies();
    res.json(candidacies);
};

export default GetAllCandidaciesController;
