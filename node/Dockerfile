FROM node:15

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.6.1

RUN npm install

RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
