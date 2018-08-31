FROM node:8.11

WORKDIR /node/app

COPY . .

RUN yarn \
  && chown -R node:node /node/app/*

USER node:node

EXPOSE 3000

CMD [ "yarn", "start" ]
