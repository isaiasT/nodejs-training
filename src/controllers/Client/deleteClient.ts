import { DeleteClient } from '../../core/useCases';
import { Response, Request } from 'express';

const DeleteClientController = async (req: Request, res: Response) => {
    const results = await DeleteClient({ id: req.params.id });
    res.json(results);
};

export default DeleteClientController;
