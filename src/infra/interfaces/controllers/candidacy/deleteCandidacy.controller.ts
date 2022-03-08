import { DeleteCandidacy } from '../../../../application/candidacy';
import { Response, Request } from 'express';

const DeleteCandidacyController = async (req: Request, res: Response) => {
    const results = await DeleteCandidacy({ id: req.params.id });
    res.json(results);
};

export default DeleteCandidacyController;
