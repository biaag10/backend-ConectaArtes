# source ./requests/comments/GET_Comments.sh

# Busca de todos os comentários (rota pública)
curl --request GET \
  --url 'http://localhost:3000/comments/list' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJiZjBlNzdlYjdmNzNiZDI5ODMxN2IiLCJpYXQiOjE3NDk2NDMwOTAsImV4cCI6MTc0OTY0NjY5MH0.J4q3eXkoQs_J-3TlMV-BzMzHax0I_4B-a3SkIb5Ji5s' \

