import { CreateUser } from '../../core/useCases';
import { Response, Request } from 'express';

const CreateUserController = async (req: Request, res: Response) => {
    const results = await CreateUser({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    });
    res.json(results);
};

export default CreateUserController;
