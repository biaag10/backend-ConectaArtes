# source ./requests/search-history/GET_SearchHistory.sh

# GET do Histórico de Busca com token válido
curl --request GET \
  --url 'http://localhost:3000/search-history' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJiZjBlNzdlYjdmNzNiZDI5ODMxN2IiLCJpYXQiOjE3NDc3NTIxNDcsImV4cCI6MTc0Nzc1NTc0N30.dv3kIPk-Q2neXnozDSN4Oqn5Fvz_XMT63HPz6sW4d5w' \
  --verbose  # Remove caso não queira o debug completo

# Teste de acesso sem token
 curl --request GET \
   --url 'http://localhost:3000/api/search-history'

# Teste de acesso com token inválido
 curl --request GET \
   --url 'http://localhost:3000/api/search-history' \
   --header 'Authorization: Bearer <token_inválido>'
