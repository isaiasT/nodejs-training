import { Response, Request } from 'express';
import { validationResult } from 'express-validator';
import { body } from 'express-validator';
import checkRequired from '../../../../utils/checkRequired';
import { getConnection } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import Client from '../../../../domain/models/client.model';
import ClientEntity from '../../../adapters/entities/client.entity';

const requiredBodyFields = ['email', 'password'];

const LoginClientValidators = [
    ...requiredBodyFields.map((field) => {
        return body(field).custom(async (value) => {
            await checkRequired(value, field);
        });
    }),
    body('email', 'Invalid email').isEmail(),
];

const LoginClientController = async (req: Request, res: Response) => {
    try {
        validationResult(req).throw();

        const repositoryORM =
            getConnection().getRepository<Client>(ClientEntity);
        const client = await repositoryORM
            .createQueryBuilder('client')
            .where('client.email = :email', { email: req.body.email })
            .getOne();

        if (
            client &&
            (await bcrypt.compare(req.body.password, client.password))
        ) {
            const token = jwt.sign(
                { clientId: client.id, email: client.email },
                process.env.TOKEN_SECRET,
                {
                    expiresIn: '2h',
                },
            );

            res.json(_.omit({ ...client, token }, 'password'));
        } else {
            res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

export { LoginClientValidators, LoginClientController };
