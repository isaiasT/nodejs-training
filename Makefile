
start:
	docker-compose up -d

stop:
	docker-compose down

remove:
	docker-compose down
	docker image rm isaiasjt/nodejs-training-backend
	docker volume prune -f

migration-run:
	docker-compose run nodejs-training sh -c 'npm run schema:sync && npm run migration:run'
