main: dev logs

dev:
	docker-compose up

dev-build:
	docker-compose up --build -d --remove-orphans

down:
	docker-compose down

logs:
	docker-compose logs -f nodeapp nginx memc
