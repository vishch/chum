FROM node:12

WORKDIR /usr/src/app/client

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

COPY . .

EXPOSE 3200

ENTRYPOINT ["yarn", "docker-start"]