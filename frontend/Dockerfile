# frontend/Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

# Limpeza de cache e instalação do Angular CLI e build-angular
RUN npm cache clean --force && npm install -g @angular/cli@15.2.0 && npm install @angular-devkit/build-angular@15.2.0 --save-dev && npm install --legacy-peer-deps

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
