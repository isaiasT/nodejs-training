import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import Rollbar from 'rollbar';
import { createConnection } from 'typeorm';
import userRoutes from './api/User.routes';

createConnection().then(() => {
    const app = express();
    const port = 3000;

    app.use(bodyParser.json());

    const rollbar = new Rollbar({
        accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
        captureUncaught: true,
        captureUnhandledRejections: true,
    });

    app.get('/', (_req: Request, res: Response) => {
        res.send('Hello World!');
    });

    app.post('/login', (req: Request, res: Response) => {
        res.send('Welcome, ' + req.body.username);
        rollbar.log('Welcome, ' + req.body.username);
    });

    app.use('/', userRoutes);

    app.listen(port, () => {
        console.log(`NodeJS Training running on port ${port}`);
    });
});
