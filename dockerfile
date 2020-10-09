FROM nginx:1.17.1-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY /dist/micro1 /usr/share/nginx/html
COPY default.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
RUN chown nginx:nginx ./*
