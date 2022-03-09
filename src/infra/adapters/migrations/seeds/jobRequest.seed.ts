import Chance from 'chance';
import { ClientIds } from './client.seed';

const chance = new Chance();

const JobRequestIds = [
    '17bbc90b-1fea-4a81-b3f9-5faed3218845',
    '530c54a4-60ba-4146-b4c8-8383ba6144f2',
    '9413efa8-59e2-4056-944e-0b05afbe57f2',
    'cc426920-2775-49f1-b9c9-644ef897ff00',
    '55311ea0-629a-4bb8-a701-7a36a3b9dd37',
];

const JobRequestSeed = [];

const total = 5;

for (let index = 0; index < total; index++) {
    JobRequestSeed.push({
        id: JobRequestIds[index],
        client: { id: ClientIds[index] },
        jobFunction: chance.profession(),
    });
}

export { JobRequestSeed, JobRequestIds };
