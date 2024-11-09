#!/bin/bash

# Aguarda até o banco de dados estar disponível
echo "Esperando o banco de dados estar disponível..."
until nc -z -v -w30 db 5432
do
  echo "Aguardando conexão com o banco de dados..."
  sleep 1
done
echo "Banco de dados está acessível!"

# Executa as migrations
php bin/console doctrine:migrations:migrate --no-interaction

# Executa o comando original do container
exec "$@"
