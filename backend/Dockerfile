# backend/Dockerfile
FROM php:7.4-fpm

RUN apt-get update && apt-get install -y \
    libpq-dev \
    unzip \
    && docker-php-ext-install pdo pdo_pgsql

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Definir o diretório de trabalho
WORKDIR /var/www/html

# Criar o projeto Symfony na pasta /app, caso não exista
RUN composer create-project symfony/skeleton .

# Expor a porta do Symfony
EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
