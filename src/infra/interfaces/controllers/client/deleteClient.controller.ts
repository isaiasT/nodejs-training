import { DeleteClient } from '../../../../application/client';
import { Response, Request } from 'express';

const DeleteClientController = async (req: Request, res: Response) => {
    const results = await DeleteClient({ id: req.params.id });
    if (results.affected) {
        res.json(results);
    } else {
        res.status(400).json({ error: "Client doesn't exist" });
    }
};

export default DeleteClientController;
