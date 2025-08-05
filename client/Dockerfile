# -------- 1단계: 빌드 --------
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# -------- 2단계: Nginx --------
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
