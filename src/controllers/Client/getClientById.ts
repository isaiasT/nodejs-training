import { GetClientById } from '../../core/useCases/Client';
import { Response, Request } from 'express';

const GetClientByIdController = async (req: Request, res: Response) => {
    const user = await GetClientById({ id: req.params.id });
    res.json(user);
};

export default GetClientByIdController;
