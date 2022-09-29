docker build -t auth-service:latest .

docker login -u ${USER} -p ${USER}

docker tag auth-service:latest coda-platform/auth-service:latest
docker push coda-platform/auth-service:latest
