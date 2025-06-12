 #source ./requests/favorites/POST_Favorites.sh

# Testando o POST para adicionar favorito com token válido
curl --request POST \
  --url 'http://localhost:3000/favorites' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJiZjBlNzdlYjdmNzNiZDI5ODMxN2IiLCJpYXQiOjE3NDc3MTAyMjIsImV4cCI6MTc0NzcxMzgyMn0.zrN5aTX5PA6eFHwxioB-pAzngrGaGWld8Ah-QrKrULs' \
  --header 'Content-Type: application/json' \
  --data '{
    "userId": "682bf0e77eb7f73bd298317b",
    "restaurantId": "fsq_id_do_restaurante_aqui",
    "restaurantName": "Nome do Restaurante",
    "restaurantLocation": "Rua Exemplo, 123"
  }'

# Teste de acesso ao POST sem token
 curl --request POST \
   --url 'http://localhost:3000/api/favorites' \
   --header 'Content-Type: application/json' \
   --data '{
     "userId": "id_do_usuario_aqui",
     "restaurantId": "fsq_id_do_restaurante_aqui",
     "restaurantName": "Nome do Restaurante",
     "restaurantLocation": "Rua Exemplo, 123"
   }'

# Teste de acesso ao POST com token inválido
 curl --request POST \
   --url 'http://localhost:3000/api/favorites' \
   --header 'Authorization: Bearer <token_inválido>' \
   --header 'Content-Type: application/json' \
   --data '{
     "userId": "id_do_usuario_aqui",
     "restaurantId": "fsq_id_do_restaurante_aqui",
     "restaurantName": "Nome do Restaurante",
     "restaurantLocation": "Rua Exemplo, 123"
   }'
