FROM node:16

RUN mkdir -p /app
WORKDIR /app 

# app nodejs

COPY package.json . 

RUN npm install 

COPY ./ .

EXPOSE 3000

CMD ["npm", "start"]