[ ![Codeship Status for isaiasT/nodejs-training](https://www.codeship.io/projects/59d8101e-cc4d-4401-ad06-4e8fcd04bd19/status?branch=main)](https://www.codeship.io/projects/456420)

# nodejs-training

## Build and run docker images:

    make start

## Stop docker containers:

    make stop

## Remove backend image and container, prune unused volumes:

    make remove

## Run migrations (requires 'make start')

    make migration-run
