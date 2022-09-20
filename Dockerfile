FROM node:lts

WORKDIR /src

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

# Generates models
RUN yarn run prisma:gen

RUN yarn run build

EXPOSE 3000

ENTRYPOINT [ "yarn", "run", "start:prod" ]