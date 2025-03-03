FROM node:21
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install --global expo-cli     
COPY . .
EXPOSE 8081
CMD ["npx", "expo", "start"]
