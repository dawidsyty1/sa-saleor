FROM node:alpine

RUN mkdir /app
WORKDIR /app

ADD . /app

RUN npm install && npm run build