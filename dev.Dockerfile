FROM node:12

ENV NODE_ENV=development
ENV PORT=3000
ENV MONGO_SERVER=mongodb://mongodb
ENV MONGO_DB=chum
ENV TOKEN_SECRET=my_jwt_secret_key1
ENV TOKEN_EXPIRATION_S=300
ENV HASH_COST=10

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

COPY . .

EXPOSE ${PORT}

ENTRYPOINT ["yarn", "start"]