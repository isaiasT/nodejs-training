import { CreateClient } from '../../../../application/client';
import { Response, Request } from 'express';
import { validationResult } from 'express-validator';
import { body } from 'express-validator';
import checkRequired from '../../../../utils/checkRequired';

const requiredBodyFields = ['name', 'country'];

const CreateClientValidators = [
    ...requiredBodyFields.map((field) => {
        return body(field).custom(async (value) => {
            await checkRequired(value, field);
        });
    }),
];

const CreateClientController = async (req: Request, res: Response) => {
    try {
        validationResult(req).throw();

        const results = await CreateClient({
            id: req.body.id,
            name: req.body.name,
            country: req.body.country,
        });
        res.json(results);
    } catch (err) {
        res.status(400).json(err);
    }
};

export { CreateClientController, CreateClientValidators };
