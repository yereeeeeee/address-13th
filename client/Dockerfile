# -------- 1단계: 빌드 --------
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# -------- 2단계: Nginx --------
FROM nginx:alpine

# 커스텀 nginx 설정 복사
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# 빌드 결과 복사
COPY --from=build /app/dist /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
