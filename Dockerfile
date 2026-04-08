# Стадия сборки Next.js
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Финальный образ с Nginx
FROM nginx:alpine

# Устанавливаем gettext для envsubst
RUN apk add --no-cache gettext

# Удаляем дефолтный конфиг
RUN rm /etc/nginx/conf.d/default.conf

# Копируем шаблон конфига
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Копируем статику из builder-стадии
COPY --from=builder /app/out /usr/share/nginx/html

# Исправляем права доступа к файлам (важно для предотвращения 403)
RUN chmod -R 755 /usr/share/nginx/html

# Переменная окружения для бэкенда (по умолчанию)
ENV BACKEND_BASE_URL=http://backend:3000

EXPOSE 80

# Подстановка переменной в конфиг и запуск nginx
CMD ["/bin/sh", "-c", "envsubst '${BACKEND_BASE_URL}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
