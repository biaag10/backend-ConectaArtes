 #source ./requests/POST_Login_User.sh

# login bem-sucedido (com username)
curl --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "bibia12",
    "password": "Bianca@123"
    }'

# login bem-sucedido (com email)
#  curl --request POST \
#    --url 'http://localhost:3000/users/login' \
#    --header 'Content-Type: application/json' \
#    --data '{
#      "email": "novo@gmail.com",
#      "password": "Bianca@123"
#      }'

# senha invalida {"message":"Senha incorreta"}
#  curl --request POST \
#    --url 'http://localhost:3000/users/login' \
#    --header 'Content-Type: application/json' \
#    --data '{
#      "username": "novo@gmail.com",
#      "password": "securepassword2"
#      }'

# email invalido {"message":"E-mail ou nome de usuário inválido"}
#  curl --request POST \
#    --url 'http://localhost:3000/users/login' \
#    --header 'Content-Type: application/json' \
#    --data '{
#      "email": "newuser0@example.com",
#      "password": "Senha@123"
#      }'

# requisição mal formatada {"message":"Nome de usuário e senha são obrigatórios. Ou Email e senha são obrigatórios!"}
#  curl --request POST \
#    --url 'http://localhost:3000/users/login' \
#    --header 'Content-Type: application/json' \
#    --data '{
#      "password": "Senha@123"
#      }'

# curl --request POST \
#   --url 'http://localhost:3000/users/login' \
#   --header 'Content-Type: application/json' \
#   --data '{
#     "username": "elenasep",
#     "password": "Elena@123"
#     }'