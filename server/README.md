# Documentação da Página Frontend

Esta documentação apresenta informações sobre a API do projeto EasyContacts, incluindo as tecnologias utilizadas e o passo a passo para rodalo localmente.

## Tecnologias Utilizadas

A página frontend do Motors Shop foi desenvolvida utilizando as seguintes tecnologias:

- TypeORM
- TypeScript
- Express
- zod
- Pg
- bcryptjs
- dotenv
- jsonwebtoken

## Como rodar localmente
- Clone o repositório;
- Dentro do reposiório, rode o comando "yarn" ou "npm install" no terminal para instalar as dependências;
- Crie um arquivo ".env" e preencha com os dados do seu banco de dados local(use o ".env.exemple" como template).
- Rode o comando "yarn run typeorm migration:run --d src/data-source.ts" para rodar as migrations(para que de certo é necessario ter feito o passo anterior)
- Rode o comando "yarn dev" ou "npm run dev" para iniciar o projeto localmente;

