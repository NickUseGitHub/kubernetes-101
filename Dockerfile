FROM node:8-alpine

WORKDIR /node/app

COPY package.json .

RUN yarn \
 && chown -R node:node /node/app/*

COPY . .

USER node:node

EXPOSE 3000

CMD [ "yarn", "start" ]