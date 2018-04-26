FROM node:8.11

COPY . /node/app

WORKDIR /node/app

CMD [ "yarn", "dev" ]
