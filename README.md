# 💊 API de Consulta de Medicamentos

Este projeto é uma API desenvolvida com **Node.js**, **Express** e **TypeScript**, que fornece informações sobre medicamentos a partir de dados oficiais da **Anvisa**.

## 📦 Sobre o Projeto

A proposta desta API é facilitar o acesso a informações de medicamentos, especialmente para **balconistas de farmácia**, integrando dados públicos em uma interface simples e consultável via requisições HTTP.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** + **Express** — Servidor e rotas da API
- **TypeScript** — Tipagem e organização do código
- **PostgreSQL** — Banco de dados relacional
- **dotenv** — Gerenciamento de variáveis de ambiente
- **CSV da Anvisa** — Fonte oficial dos dados de medicamentos

---

## 🗃️ Estrutura do Projeto

A estrutura segue o padrão **CRC (Controller, Repository, Service)**:

---

## 🧩 Setup do Banco de Dados

- A base de dados foi criada a partir de um **arquivo CSV** baixado do site oficial da [Anvisa](https://www.gov.br/anvisa/pt-br).
- Os dados foram importados diretamente para uma tabela no **PostgreSQL**, utilizando os comandos `COPY` e ferramentas de importação.
- O banco foi modelado para otimizar a consulta de informações relevantes.
