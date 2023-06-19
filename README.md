# hematoBusca
Um app para consulta de dados de doadores de sangue, posssui um front end feito no estilo neubrutalism e um backend para se comunicar com o banco de dados MySql.

# IMPORTANTE
# É importante que o frontend esteva rodando na porta 4200 caso esteja rodando em outra sera nessecario alterar a porta na linha 18 do 
# script DoadoresController do backend na linha: @CrossOrigin(origins = "http://localhost:4200") 
# O mesmo vale para o backend se a applicação estiver rodando em uma porta diferente de 8080 ser necessario alterala no script 
#  api.service.ts na linha 10 que contem :private apiUrl = 'http://localhost:8080';
# O BANCO DE DADOS tem que ser configurado no backend
# Acesso ao banco de dados deve ter o seguinte formato: 
# spring.datasource.url= jdbc:mysql://localhost:3306/nome_do_seu_banco_de_dados
# spring.datasource.username=seuUser
# spring.datasource.password=suaSenha


# Frontend
O front end foi desenvolvido em angular e faz chamada para os endpoint do back end trazendo dados sobre os doadores para a exibição no app.


# BackEnd
O back end foi desenvolvido em springboot e ao iniciar chama o json no link abaixo e popula o banco de dados: 
https://communication-assets.gupy.io/production/companies/52441/emails/1686945524213/e8330670-6f23-11ed-91a8-05f5cf6759fb/data_1.json
O back end se pega dados com no banco de dados MySql, e retorna os dados tratados.

