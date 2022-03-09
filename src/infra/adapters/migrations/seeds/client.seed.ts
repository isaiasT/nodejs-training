import Chance from 'chance';

const chance = new Chance();

const ClientIds = [
    '0ab6c2d1-afe4-4c36-abca-c132eb9d65dd',
    'c64a1734-244a-4671-9764-bff79fb79b86',
    '53179062-de4c-456d-8fad-23793dd4ef9a',
    '0f3be4c9-f538-42bb-9a6b-15808428d64b',
    '46d36758-bd43-415b-b5ae-994d122aba91',
];

const ClientSeed = [];

const total = 5;

for (let index = 0; index < total; index++) {
    ClientSeed.push({
        id: ClientIds[index],
        name: chance.company(),
        country: chance.pickone(['Spain', 'Portugal', 'US', 'UK']),
    });
}

export { ClientSeed, ClientIds };
