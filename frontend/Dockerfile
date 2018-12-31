FROM nginx:1.15.7-alpine

EXPOSE 80

COPY se.com.conf /etc/nginx/conf.d/
COPY dist/ /app
RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir -p /run/nginx
CMD ["nginx", "-g", "daemon off;"]
