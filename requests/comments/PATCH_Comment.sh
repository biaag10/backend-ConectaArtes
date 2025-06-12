# source ./requests/comments/PATCH_Comment.sh

# Atualiza um comentário com token válido
curl --request PATCH \
  --url 'http://localhost:3000/comments/update/684976e7102e24d1467404af' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJiZjBlNzdlYjdmNzNiZDI5ODMxN2IiLCJpYXQiOjE3NDk2NzczMjEsImV4cCI6MTc0OTY4MDkyMX0.P8ISjdf3VEBHvteG52CesS7qPxNfu1WAyMerTUbZRmE' \
  --header 'Content-Type: application/json' \
  --data '{
           "restaurantName": "Novo Restaurante",
           "cuisineType": "Italiana",
           "dishes": [
             {
               "name": "Spaghetti Carbonara", 
               "price": "29.99", 
               "rating": 5, 
               "comment": "Ainda melhor do que antes!", 
               "photoUrl": "https://example.com/spaghetti-carbonara.jpg"
             }
           ]
         }'
