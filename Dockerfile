FROM node:lts as builder
WORKDIR /app/website
COPY ./docs /app/docs
COPY ./website /app/website
RUN npm install
RUN npm run build

FROM nginx
EXPOSE 80
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/website/build/adrenaline /usr/share/nginx/html