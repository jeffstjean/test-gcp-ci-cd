FROM node:10-alpine

WORKDIR /home/node/app

COPY package*.json ./

USER root

RUN npm install

COPY . .

CMD npm run start