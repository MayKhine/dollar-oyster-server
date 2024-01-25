FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

ENV PORT=3300

EXPOSE 3300

CMD ["./node_modules/.bin/ts-node" , "./src/App.ts"]

LABEL org.opencontainers.image.architecture='amd64 arm64'