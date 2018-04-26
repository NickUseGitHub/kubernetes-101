main: app-dev

app-dev:
	docker-compose up --build -d --remove-orphans

app-down:
	docker-compose down

app-logs:
	docker-compose logs -f api
