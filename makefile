main: dev

dev:
	docker-compose up --build -d --remove-orphans

down:
	docker-compose down

logs:
	docker-compose logs -f nodeapp
