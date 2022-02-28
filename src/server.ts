import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import Rollbar from 'rollbar';

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

app.post('/api/users', (req: Request, res: Response) => {
    res.send('Created user: ' + req.body.username);
    rollbar.log('Created user: ' + req.body.username);
});

app.listen(port, () => {
    console.log(`NodeJS Training running on port ${port}`);
});
