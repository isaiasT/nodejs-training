import { UpdateUser } from '../../core/useCases';
import { Response, Request } from 'express';

const UpdateUserController = async (req: Request, res: Response) => {
    const results = await UpdateUser({
        id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    });
    res.json(results);
};

export default UpdateUserController;
