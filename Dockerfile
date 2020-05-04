FROM node:alpine

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN npm install

CMD ["npm", "start"]
