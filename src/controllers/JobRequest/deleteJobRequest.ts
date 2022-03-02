import { DeleteJobRequest } from '../../core/useCases/JobRequest';
import { Response, Request } from 'express';

const DeleteJobRequestController = async (req: Request, res: Response) => {
    const results = await DeleteJobRequest({ id: req.params.id });
    res.json(results);
};

export default DeleteJobRequestController;
