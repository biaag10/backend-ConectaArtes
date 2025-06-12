# source ./requests/favorites/DELETE_Favorites.sh

# Testando o DELETE para remover favorito com token válido
curl --request DELETE \
  --url 'http://localhost:3000/favorites/682bf0e77eb7f73bd298317b/fsq_id_do_restaurante_aqui' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJiZjBlNzdlYjdmNzNiZDI5ODMxN2IiLCJpYXQiOjE3NDc3MTAyMjIsImV4cCI6MTc0NzcxMzgyMn0.zrN5aTX5PA6eFHwxioB-pAzngrGaGWld8Ah-QrKrULs'

# Teste de acesso ao DELETE sem token
 curl --request DELETE \
   --url 'http://localhost:3000/api/favorites/id_do_usuario_aqui/fsq_id_do_restaurante_aqui'

# Teste de acesso ao DELETE com token inválido
 curl --request DELETE \
   --url 'http://localhost:3000/api/favorites/id_do_usuario_aqui/fsq_id_do_restaurante_aqui' \
   --header 'Authorization: Bearer <token_inválido>'
