import { CreatePlacement } from '../../../../application/placement';
import { Response, Request } from 'express';
import checkRequired from '../../../../utils/checkRequired';
import { body } from 'express-validator';
import { validationResult } from 'express-validator';

const requiredBodyFields = ['user', 'client', 'candidacy'];

const CreatePlacementValidators = [
    ...requiredBodyFields.map((field) => {
        return body(field).custom(async (value) => {
            await checkRequired(value, field);
        });
    }),
];

const CreatePlacementController = async (req: Request, res: Response) => {
    try {
        validationResult(req).throw();

        const results = await CreatePlacement({
            id: req.body.id,
            user: req.body.user,
            client: req.body.client,
            candidacy: req.body.candidacy,
        });
        res.json(results);
    } catch (err) {
        res.status(400).json(err);
    }
};

export { CreatePlacementController, CreatePlacementValidators };
