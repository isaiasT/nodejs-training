import { DeleteUser } from '../../core/useCases/User';
import { Response, Request } from 'express';

const DeleteUserController = async (req: Request, res: Response) => {
    const results = await DeleteUser({ id: req.params.id });
    if (results.affected) {
        res.json(results);
    } else {
        res.status(400).json({ error: "User doesn't exist" });
    }
};

export default DeleteUserController;
