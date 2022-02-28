import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import Rollbar from 'rollbar';
import { createConnection } from 'typeorm';
import { User } from './entity/User';

createConnection().then((connection) => {
    const app = express();
    const port = 3000;

    app.use(bodyParser.json());

    const rollbar = new Rollbar({
        accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
        captureUncaught: true,
        captureUnhandledRejections: true,
    });

    const userRepository = connection.getRepository(User);

    app.get('/', (_req: Request, res: Response) => {
        res.send('Hello World!');
    });

    app.post('/login', (req: Request, res: Response) => {
        res.send('Welcome, ' + req.body.username);
        rollbar.log('Welcome, ' + req.body.username);
    });

    app.get('/users', async (_req: Request, res: Response) => {
        const users = await userRepository.find();
        res.json(users);
    });

    app.get('/users/:id', async (req: Request, res: Response) => {
        const results = await userRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.post('/users', async (req: Request, res: Response) => {
        const user = await userRepository.create(req.body);
        const results = await userRepository.save(user);
        return res.send(results);
    });

    app.put('/users/:id', async (req: Request, res: Response) => {
        const user = await userRepository.findOne(req.params.id);
        userRepository.merge(user, req.body);
        const results = await userRepository.save(user);
        return res.send(results);
    });

    app.delete('/users/:id', async (req: Request, res: Response) => {
        const results = await userRepository.delete(req.params.id);
        return res.send(results);
    });

    app.listen(port, () => {
        console.log(`NodeJS Training running on port ${port}`);
    });
});
