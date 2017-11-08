FROM node:9.0.0-alpine
RUN apk update && apk add libc6-compat

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
