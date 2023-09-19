FROM node:20

WORKDIR /app

RUN npm install -g npm
RUN npm install -g gatsby-cli

EXPOSE 8000

