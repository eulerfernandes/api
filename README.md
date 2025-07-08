# 💊 API de Consulta de Medicamentos

API REST desenvolvida com **Node.js**, **Express** e **TypeScript**, que fornece informações sobre medicamentos a partir de dados públicos da **Anvisa**.

---

## 📦 Sobre o Projeto

O objetivo desta API é **facilitar o acesso a informações sobre medicamentos**, integrando dados da Anvisa em uma interface simples, eficiente e acessível para **balconistas de farmácia** e sistemas de farmácias.

---

## 🚀 Funcionalidades Atuais

- 🔎 Listagem de medicamentos (GET)
- ➕ Cadastro de novos registros (POST)
- 🔍 Filtro por nome via query params
- 🧪 Integração com PostgreSQL
- ✅ Testes via Insomnia
- 🧱 Estrutura MVC (Model, Controller, Service, Routes)

---

## 🛠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg (node-postgres)](https://node-postgres.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [Insomnia](https://insomnia.rest/) — Testes de API
- CSV da [Anvisa](https://www.gov.br/anvisa/pt-br)

---

🧩 Setup do Banco de Dados

O banco de dados é populado com um arquivo .csv oficial da Anvisa.

A tabela conjunto_dados armazena os seguintes campos:

organização, nome, descrição, tags,
quantidade_recursos, quantidade_reusos,
quantidade_downloads, quantidade_seguidores

O acesso ao banco é feito via pg e configurado com variáveis .env.

---

📥 Variáveis de Ambiente

Crie um arquivo .env na raiz com:

DB_HOST=localhost

DB_PORT=5433

DB_USER=postgres

DB_PASSWORD=postgres

DB_NAME=anvisa_db

---

## 🗃️ Estrutura do Projeto

```bash
src/
│
├── config/                 # Configuração do banco de dados (pg + dotenv)
├── controllers/            # Lógica das rotas (Request/Response)
├── models/                 # Funções que interagem com o banco de dados
├── routes/                 # Endpoints da API
├── services/               # Camada intermediária com regras de negócio
└── app.ts                  # Arquivo principal (setup do Express)

📌 Próximas Etapas
 Endpoint PUT para atualização

 Endpoint DELETE para remoção

 Paginação e ordenação

 Documentação com Swagger

 Validação com Zod/Yup

 Deploy (Railway, Render ou VPS)

🧠 Autor
Desenvolvido por Euler Fernandes 🚀
Contato: eulerfernandes0@gmail.com



```
