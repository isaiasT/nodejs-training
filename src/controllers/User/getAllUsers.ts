import { GetAllUsers } from '../../core/useCases';
import { Response, Request } from 'express';

const GetAllUsersController = async (_req: Request, res: Response) => {
    const users = await GetAllUsers();
    res.json(users);
};

export default GetAllUsersController;
