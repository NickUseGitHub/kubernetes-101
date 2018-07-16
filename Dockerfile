FROM node:8.11

COPY . /node/app

WORKDIR /node/app

RUN yarn

EXPOSE 3000

CMD [ "yarn", "dev" ]
