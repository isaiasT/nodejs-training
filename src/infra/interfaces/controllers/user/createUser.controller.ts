import { CreateUser } from '../../../../application/user';
import { Response, Request } from 'express';
import { check, validationResult } from 'express-validator';
import { body } from 'express-validator';
import checkRequired from '../../../../utils/checkRequired';

const requiredBodyFields = [
    'name',
    'availability',
    'email',
    'country',
    'password',
];

const CreateUserValidators = [
    ...requiredBodyFields.map((field) => {
        return body(field).custom(async (value) => {
            await checkRequired(value, field);
        });
    }),
    body('email', 'Invalid email').isEmail(),
    check('password', 'Please enter a strong password').isStrongPassword(),
];

const CreateUserController = async (req: Request, res: Response) => {
    try {
        validationResult(req).throw();

        const results = await CreateUser({
            id: req.body.id,
            name: req.body.name,
            availability: req.body.availability,
            email: req.body.email,
            country: req.body.country,
            password: req.body.password,
        });
        res.json(results);
    } catch (err) {
        res.status(400).json(err);
    }
};

export { CreateUserValidators, CreateUserController };
