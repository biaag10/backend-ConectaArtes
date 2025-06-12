import mongoose from 'mongoose';

// modelo de usuário
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,  
      unique: true, // garante que o nome de usuário seja único
    },
    email: {
      type: String,
      required: true,
      unique: true, // garante que o email seja único
      match: [/^\S+@\S+\.\S+$/, 'Email inválido'], // validação de formato de email
    },
    password: {
      type: String,
      required: true,
      select: false, // não retorna a senha ao buscar usuários
    }
  },
  { timestamps: true } // adiciona os campos de createdAt e updatedAt
);

const User = mongoose.model('User', UserSchema);

export default User;
