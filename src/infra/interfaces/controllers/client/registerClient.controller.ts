import { RegisterClient } from '../../../../application/client';
import { Response, Request } from 'express';
import { validationResult } from 'express-validator';
import { check, body } from 'express-validator';
import checkRequired from '../../../../utils/checkRequired';
import { getConnection } from 'typeorm';
import Client from '../../../../domain/models/client.model';
import ClientEntity from '../../../adapters/entities/client.entity';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const requiredBodyFields = ['name', 'country', 'email', 'password'];

const RegisterClientValidators = [
    ...requiredBodyFields.map((field) => {
        return body(field).custom(async (value) => {
            await checkRequired(value, field);
        });
    }),
    body('email', 'Invalid email').isEmail(),
    check('password', 'Please enter a strong password').isStrongPassword(),
];

const RegisterClientController = async (req: Request, res: Response) => {
    try {
        validationResult(req).throw();

        const repositoryORM =
            getConnection().getRepository<Client>(ClientEntity);
        const client = await repositoryORM
            .createQueryBuilder('client')
            .where('client.email = :email', { email: req.body.email })
            .getOne();

        if (client) {
            res.status(400).json({
                errors: [{ msg: 'Client already exists' }],
            });
        } else {
            const encryptedPassword = await bcrypt.hash(req.body.password, 10);

            const client = await RegisterClient({
                id: req.body.id,
                name: req.body.name,
                country: req.body.country,
                email: req.body.email,
                password: encryptedPassword,
            });

            const token = jwt.sign(
                { clientId: client.id, email: client.email },
                process.env.TOKEN_SECRET,
                {
                    expiresIn: '2h',
                },
            );

            res.json({ ...client, token });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

export { RegisterClientController, RegisterClientValidators };
