# TODO: add healthcheck for automatic rollbacks

FROM node:10-alpine

WORKDIR /home/node/app

COPY package*.json ./

USER root

RUN npm install

COPY . .

HEALTHCHECK --interval=10s --timeout=3s --retries=3 CMD node ./healthcheck.js

CMD npm run start