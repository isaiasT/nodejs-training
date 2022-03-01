import { GetUserById } from '../../core/useCases';
import { Response, Request } from 'express';

const GetAllUsersController = async (req: Request, res: Response) => {
    const user = await GetUserById({ id: req.params.id });
    res.json(user);
};

export default GetAllUsersController;
