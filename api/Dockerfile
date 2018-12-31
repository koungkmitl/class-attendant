FROM node:8.12.0-alpine

WORKDIR /app

COPY . /app

RUN yarn install \
  && yarn build \
  && chmod +x wait-for

EXPOSE 3000
