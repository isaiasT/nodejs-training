import { GetUserById } from '../../../../application/user';
import { Response, Request } from 'express';

const GetUserByIdController = async (req: Request, res: Response) => {
    const user = await GetUserById({ id: req.params.id });
    res.json(user);
};

export default GetUserByIdController;
