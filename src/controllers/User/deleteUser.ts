import { DeleteUser } from '../../core/useCases';
import { Response, Request } from 'express';

const DeleteUserController = async (req: Request, res: Response) => {
    const results = await DeleteUser({ id: req.params.id });
    res.json(results);
};

export default DeleteUserController;
