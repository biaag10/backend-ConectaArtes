# source ./requests/search-history/POST_SearchHistory.sh
# Testando o POST para salvar um novo histórico de busca com token válido
curl --request POST \
  --url 'http://localhost:3000/search-history' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJiZjBlNzdlYjdmNzNiZDI5ODMxN2IiLCJpYXQiOjE3NDc3MTAyMjIsImV4cCI6MTc0NzcxMzgyMn0.zrN5aTX5PA6eFHwxioB-pAzngrGaGWld8Ah-QrKrULs' \
  --header 'Content-Type: application/json' \
  --data '{
    "cep": "01001000",
    "latitude": -23.55052,
    "longitude": -46.633308,
    "userId": "682bf0e77eb7f73bd298317b",
    "ipAddress": "192.168.0.1"
  }'

# Teste de acesso ao POST sem token
 curl --request POST \
   --url 'http://localhost:3000/api/search-history' \
   --header 'Content-Type: application/json' \
   --data '{
     "cep": "01001000",
     "latitude": -23.55052,
     "longitude": -46.633308,
     "userId": "id_do_usuario_aqui",
     "ipAddress": "192.168.0.1"
   }'

# Teste de acesso ao POST com token inválido
 curl --request POST \
   --url 'http://localhost:3000/api/search-history' \
   --header 'Authorization: Bearer <token_inválido>' \
   --header 'Content-Type: application/json' \
   --data '{
     "cep": "01001000",
     "latitude": -23.55052,
     "longitude": -46.633308,
     "userId": "id_do_usuario_aqui",
     "ipAddress": "192.168.0.1"
   }'
