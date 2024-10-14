FROM node:20.14.0-alpine
WORKDIR /app/server
COPY package.json .
RUN npm install
COPY . .

EXPOSE 3001