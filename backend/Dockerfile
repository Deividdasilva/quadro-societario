# backend/Dockerfile
FROM php:7.4-fpm

# Instalar dependências do sistema e extensões necessárias
RUN apt-get update && apt-get install -y \
    libpq-dev \
    unzip \
    && docker-php-ext-install pdo pdo_pgsql

# Instalar o Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Definir o diretório de trabalho
WORKDIR /var/www/html

# Copiar os arquivos do projeto Symfony para o container
COPY . .

# Executar o Composer para instalar as dependências do projeto
RUN composer install --no-interaction --prefer-dist

# Expor a porta do Symfony
EXPOSE 8000

# Comando para rodar o servidor PHP embutido
CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
