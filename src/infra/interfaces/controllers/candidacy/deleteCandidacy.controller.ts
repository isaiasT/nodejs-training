import { DeleteCandidacy } from '../../../../application/candidacy';
import { Response, Request } from 'express';

const DeleteCandidacyController = async (req: Request, res: Response) => {
    const results = await DeleteCandidacy({ id: req.params.id });

    if (results.affected) {
        res.json(results);
    } else {
        res.status(400).json({ error: "Candidacy doesn't exist" });
    }
};

export default DeleteCandidacyController;
