# 🛠️ Testes Automatizados no Postman 🚀

Este repositório contém uma coleção de testes de API criados no Postman.

## 📌 Arquivos

- `meus-testes.postman_collection.json` → Coleção com os testes de API
- `meu-ambiente.postman_environment.json` → Variáveis de ambiente usadas nos testes

## 🚀 Como Executar os Testes

1️⃣ **Importar no Postman**  
- Baixe o arquivo `.json` da coleção  
- No Postman, clique em **Import** e selecione o arquivo  

2️⃣ **Executar via Terminal com Newman** (opcional)  
Se quiser rodar os testes via CLI:  
```sh
npm install -g newman
newman run meus-testes.postman_collection.json -e meu-ambiente.postman_environment.json
