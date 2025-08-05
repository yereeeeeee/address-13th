# -------- 1단계: 빌드 --------
FROM node:18 AS build

WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm install

# 소스 복사 & 빌드
COPY . .
RUN npm run build

# -------- 2단계: Nginx --------
FROM nginx:alpine

# Nginx 기본 설정 유지
# 필요한 경우 conf.d에 커스텀 conf 복사 가능
# COPY ./nginx/conf.d /etc/nginx/conf.d

# 빌드 결과 복사
COPY --from=build /app/build /usr/share/nginx/html/13th

CMD ["nginx", "-g", "daemon off;"]
