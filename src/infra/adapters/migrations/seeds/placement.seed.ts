import { ClientIds } from './client.seed';
import { UserIds } from './user.seed';
import { CandidacyIds } from './candidacy.seed';

const PlacementIds = [
    'bce8c361-bfa6-4570-a78d-f6e0adfb272e',
    'a0c0f74c-41c6-40f8-8cfd-488ebb3266ed',
];

const PlacementSeed = [];

PlacementSeed.push({
    id: PlacementIds[0],
    user: { id: UserIds[3] },
    client: { id: ClientIds[3] },
    candidacy: { id: CandidacyIds[3] },
});

PlacementSeed.push({
    id: PlacementIds[1],
    user: { id: UserIds[4] },
    client: { id: ClientIds[4] },
    candidacy: { id: CandidacyIds[4] },
});

export { PlacementSeed, PlacementIds };
