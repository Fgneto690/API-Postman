{
	"info": {
		"_postman_id": "9a410315-cc14-4dcc-ba5f-4aca68eeb05e",
		"name": "Fake API Tests",
		"description": "Esse projeto é uma ampliação de portfolio com o objetivo de testar a \"fake\" api fazendo requisições http a mesma",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "42066745"
	},
	"item": [
		{
			"name": "Users",
			"item": [
				{
					"name": "Get-all-users",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code é 200\", function () {\r",
									"     pm.expect(pm.response.code).to.equal(200);\r",
									"});\r",
									"\r",
									"pm.test(\"Os usuarios tem ID\", function () {\r",
									"     pm.expect(pm.response.json()).to.be.an('array');\r",
									"     pm.response.json().forEach((user) =>{\r",
									"        pm.expect(user).to.have.property('id');\r",
									"     });\r",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://67abf41b5853dfff53d8ef64.mockapi.io/Users",
							"protocol": "https",
							"host": [
								"67abf41b5853dfff53d8ef64",
								"mockapi",
								"io"
							],
							"path": [
								"Users"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get-individual-users",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code é 200\", function () {\r",
									"     pm.expect(pm.response.code).to.equal(200);\r",
									"});\r",
									"\r",
									"pm.test(\"Se o usuario corresponde a pagina\", function () {\r",
									"    var responsejson = pm.response.json();\r",
									"    pm.expect(responsejson).to.be.an('object');\r",
									"    pm.expect(responsejson.id).to.equal(\"20\");\r",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://67abf41b5853dfff53d8ef64.mockapi.io/Users/20",
							"protocol": "https",
							"host": [
								"67abf41b5853dfff53d8ef64",
								"mockapi",
								"io"
							],
							"path": [
								"Users",
								"20"
							]
						}
					},
					"response": []
				},
				{
					"name": "Posts-users",
					"event": [
						{
							"listen": "prerequest",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						},
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Se foi criado um novo post\", function () {\r",
									"    pm.expect(pm.response.code).to.equal(201);\r",
									"});\r",
									"pm.test(\"Se o post tem Nome, idade e id\", function () {\r",
									"    var responseObject = pm.response.json();\r",
									"    pm.expect(responseObject).to.be.an(\"object\")\r",
									"    pm.expect(responseObject).to.have.property(\"Name\")\r",
									"    pm.expect(responseObject).to.have.property(\"Idade\")\r",
									"    pm.expect(responseObject).to.have.property(\"id\")\r",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"Name\": \"Jonas Rodriguês\",\r\n    \"Idade\": \"15\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://67abf41b5853dfff53d8ef64.mockapi.io/Users",
							"protocol": "https",
							"host": [
								"67abf41b5853dfff53d8ef64",
								"mockapi",
								"io"
							],
							"path": [
								"Users"
							]
						}
					},
					"response": []
				},
				{
					"name": "Att-user",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Saber se funcionou a atualização de usuario\", function () {\r",
									"    pm.expect(pm.response.code).to.equal(200);\r",
									"    var responseObject = pm.response.json();\r",
									"    pm.expect(responseObject).to.be.an(\"object\");\r",
									"    pm.expect(responseObject).to.have.property(\"Name\");\r",
									"    pm.expect(responseObject).to.have.property(\"Idade\");\r",
									"    pm.expect(responseObject).to.have.property(\"id\");\r",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"createdAt\": \"2025-02-11T04:29:36.983Z\",\r\n    \"Name\": \"Jason tatum\",\r\n    \"Idade\": \"22\",\r\n    \"id\": \"1\"\r\n  }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://67abf41b5853dfff53d8ef64.mockapi.io/Users/1",
							"protocol": "https",
							"host": [
								"67abf41b5853dfff53d8ef64",
								"mockapi",
								"io"
							],
							"path": [
								"Users",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete-User",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"// Testa se o status retornado é 200 ou 204 (depende da API)\r",
									"pm.test(\"Status Code é 200 ou 204\", function () {\r",
									"    pm.expect(pm.response.code).to.be.oneOf([200, 204]);\r",
									"});\r",
									"\r",
									"// Testa se o corpo da resposta está vazio (caso a API retorne um body)\r",
									"pm.test(\"Resposta deve estar vazia ou conter mensagem de sucesso\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData).to.be.an(\"object\");\r",
									"});\r",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "https://67abf41b5853dfff53d8ef64.mockapi.io/Users/23",
							"protocol": "https",
							"host": [
								"67abf41b5853dfff53d8ef64",
								"mockapi",
								"io"
							],
							"path": [
								"Users",
								"23"
							]
						}
					},
					"response": []
				}
			],
			"description": "Para tests de usuário"
		}
	]
}