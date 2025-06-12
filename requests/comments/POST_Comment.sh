# source ./requests/comments/POST_Comment.sh

# Criação de comentário com token válido
curl --request POST \
  --url 'http://localhost:3000/comments/create' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJiZjBlNzdlYjdmNzNiZDI5ODMxN2IiLCJpYXQiOjE3NDk2NDMwOTAsImV4cCI6MTc0OTY0NjY5MH0.J4q3eXkoQs_J-3TlMV-BzMzHax0I_4B-a3SkIb5Ji5s' \
  --header 'Content-Type: application/json' \
  --data '{
           "userId": "682bf0e77eb7f73bd298317b",
           "restaurantName": "Restaurante X",
           "cuisineType": "Italiana",
           "dishes": [{"name": "Spaghetti", "price": "25.99", "rating": 5, "comment": "Excelente prato!", "photoUrl": "https://example.com/spaghetti.jpg"}]
         }'
