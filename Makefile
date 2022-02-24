# import config.
cnf ?= config.env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

current_dir = $(shell pwd)

# DOCKER TASKS
# Build the container
build: ## Build the container
	docker build . -t $(APP_NAME)

run: ## Run container on port configured in `config.env`
	docker run --rm -dit -p $(PORT):$(PORT)/tcp -v $(current_dir):/usr/src/nodejs-training --name $(APP_NAME) $(APP_NAME)

stop: ## Stop and remove a running container
	docker stop $(APP_NAME); docker rm $(APP_NAME)
