FROM node:8-slim

WORKDIR /starter
ENV NODE_ENV development

COPY package.json /starter/package.json

#RUN npm install -g nodemon
RUN npm install

COPY .env.example /starter/.env.example
COPY . /starter

CMD ["npm","start"]

#CMD ["nodemon"]

EXPOSE 8080
