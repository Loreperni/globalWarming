FROM node:latest as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /usr/src/app/dist/global-warming /usr/share/nginx/html
EXPOSE 80
