#base image
FROM node:9.7.1

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3500

CMD ["npm", "start"]