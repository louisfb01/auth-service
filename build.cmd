docker build -t auth-service:latest .
docker run --rm -d ^
-p 8080:8080 ^
-e KEYCLOAK_USER=admin ^
-e KEYCLOAK_PASSWORD=Password123 ^
-e DB_VENDOR=postgres ^
-e DB_DATABASE=ul-auth-service ^
-e DB_USER=user ^
-e DB_PASSWORD=password ^
-e DB_ADDR=host.docker.internal ^
-e DB_PORT=6543 ^
auth-service:latest