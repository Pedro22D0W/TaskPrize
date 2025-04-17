FROM node:21

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install -g @ionic/cli


COPY . .

EXPOSE 8100

CMD ["ionic", "serve", "--host=0.0.0.0", "--port=8100"]
