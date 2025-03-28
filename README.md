# 🛠️ Testes Automatizados no Postman 🚀

Este repositório contém uma coleção de testes de API criados no Postman.

Neste projeto, utilizei o Postman para simular e validar as principais operações de requisições HTTP, abrangendo os métodos POST, GET, PUT e DELETE. O objetivo foi testar e garantir a integridade das interações entre cliente e servidor, validando respostas, status codes e a estrutura dos dados retornados.

Além disso, o repositório inclui o arquivo Collection, que contém a coleção completa dos testes realizados, permitindo a execução e análise dos cenários testados de forma estruturada.

## 📌 Arquivos

- `meus-testes.postman_collection.json` → Coleção com os testes de API

## 🚀 Como Executar os Testes

1️⃣ **Importar no Postman**  
- Baixe o arquivo `.json` da coleção  
- No Postman, clique em **Import** e selecione o arquivo  

2️⃣ **Executar via Terminal com Newman** (opcional)  
Se quiser rodar os testes via CLI:  
```sh
npm install -g newman
newman run meus-testes.postman_collection.json -e meu-ambiente.postman_environment.json
