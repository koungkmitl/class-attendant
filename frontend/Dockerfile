FROM node:8.12.0-alpine AS node
WORKDIR /app
COPY . /app
RUN yarn install \
    && yarn build

FROM nginx:1.15.7-alpine
EXPOSE 80
EXPOSE 443
COPY se.com.conf /etc/nginx/conf.d/
COPY --from=node /app/dist/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
