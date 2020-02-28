FROM node:12

ENV NODE_ENV=development
ENV PORT=3000
ENV MONGO_SERVER=mongodb://mongodb
ENV MONGO_DB=chum
ENV TOKEN_SECRET=my_jwt_secret_key1
ENV HASH_COST=10

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install && mv node_modules ../
RUN cp -a ../node_modules ./

COPY . .

EXPOSE ${PORT}

ENTRYPOINT ["yarn", "start"]