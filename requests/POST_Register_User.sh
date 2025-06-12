# source ./requests/POST_Register_User.sh

# registro bem-sucedido 
curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Usiario Novo",
    "username": "novo",
    "email": "novo@gmail.com",
    "password": "Bianca@123"
  }'

# e-mail repetido
 curl --request POST \
   --url 'http://localhost:3000/users/register' \
   --header 'Content-Type: application/json' \
   --data '{
     "name": "Another User",
     "username": "anotheruser",
     "email": "bianca@gmail.com",
     "password": "Senha@123"
   }'

# requisição mal formatada {"message":"Nome, Nome de usuário, Email e senha são obrigatórios!"}
 curl --request POST \
   --url 'http://localhost:3000/users/register' \
   --header 'Content-Type: application/json' \
   --data '{
     "name": "Another User",
     "email": "emailinvalido",
     "password": "Senha@123"
   }'

# senha inválida {"message":"A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial"}
 curl --request POST \
   --url 'http://localhost:3000/users/register' \
   --header 'Content-Type: application/json' \
   --data '{
     "name": "New User Name 3",
     "username": "newuserUsername3",
     "email": "newuser3@example.com",
     "password": "dakldmkls"
   }'
