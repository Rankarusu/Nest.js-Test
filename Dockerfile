from node:lts

WORKDIR /src

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

RUN yarn start:prod