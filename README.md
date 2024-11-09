
# # Quadro Societário
Este projeto consiste em uma API backend desenvolvida em Symfony, e um frontend em Angular. Utiliza PostgreSQLcomo sistema de banco de dados, com Docker e Docker Compose para simplificar a configuração e a execução do ambiente de desenvolvimento.

## Requisitos

- Docker
- Docker Compose

## Configuração do Ambiente

### Clonando o Repositório

```bash
git clone https://github.com/Deividdasilva/quadro-societario
cd quadro-societario
```

### Iniciando os Containers

Utilize o Docker Compose para iniciar os containers:

```bash
docker-compose up -d
```

### Acessando a Aplicação

- **Projeto Backend**: [http://localhost:8000](http://localhost:8000)
- **Projeto Frontend**: [http://localhost:4200](http://localhost:4200)


## Estrutura do Projeto

- `quadro-societario/backend`: Código-fonte da api.
- `quadro-societario/frontend`: Código-fonte do Frontend.