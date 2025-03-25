FROM node:latest

WORKDIR /index

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "run", "dev" ]