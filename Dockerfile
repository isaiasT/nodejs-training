FROM node:16

WORKDIR /usr/src/nodejs-training

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
