import Chance from 'chance';
import { JobRequestIds } from './jobRequest.seed';
import { UserIds } from './user.seed';

const chance = new Chance();

const CandidacyIds = [
    '393da43c-da6e-406e-b755-cf2da97e7ab3',
    '9589d68c-2bd3-40bd-ac24-4ce04224e04f',
    '897760ab-69fd-4b89-9990-5bb9e780861c',
    'c9506c75-5b3b-4045-98f1-f7bcbe9c8186',
    '3c5cdd3b-625e-4088-aa9a-d45f5f27f3ae',
];

const CandidacySeed = [];

const total = 3;

for (let index = 0; index < total; index++) {
    CandidacySeed.push({
        id: CandidacyIds[index],
        jobRequest: { id: JobRequestIds[index] },
        user: { id: UserIds[index] },
        status: chance.pickone(['pending', 'rejected']),
    });
}

CandidacySeed.push({
    id: CandidacyIds[3],
    jobRequest: { id: JobRequestIds[3] },
    user: { id: UserIds[3] },
    status: 'accepted',
});

CandidacySeed.push({
    id: CandidacyIds[4],
    jobRequest: { id: JobRequestIds[4] },
    user: { id: UserIds[4] },
    status: 'accepted',
});

export { CandidacySeed, CandidacyIds };
