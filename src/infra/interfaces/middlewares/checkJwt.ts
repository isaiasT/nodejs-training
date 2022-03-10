import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const jwtPayload = <any>jwt.verify(token, process.env.TOKEN_SECRET);
        res.locals.jwtPayload = jwtPayload;

        const { userId, email } = jwtPayload;
        const newToken = jwt.sign({ userId, email }, process.env.TOKEN_SECRET, {
            expiresIn: '2h',
        });
        res.setHeader('token', newToken);

        next();
    } catch (error) {
        res.status(401).send({ errors: [{ msg: 'Invalid token' }] });
    }
};
