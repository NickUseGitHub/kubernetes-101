FROM node:8-alpine

WORKDIR /node/app

COPY . .

RUN yarn \
 && chown -R node:node /node/app/*

USER node:node

CMD [ "yarn", "start" ]

EXPOSE 3000