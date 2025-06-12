import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// função para registrar um novo usuário
const register = async (name, username, email, password) => {
  // valida o formato de email
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!email.match(emailRegex)) {
    throw new Error('Formato de e-mail inválido');
  }

  // valida o formato de senha (mínimo 8 caracteres, 1 maiúscula, 1 número, 1 especial)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password.match(passwordRegex)) {
    throw new Error('A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial');
  }

  // verifica se o e-mail ou o nome de usuário já existem
  const userExists = await User.findOne({ $or: [{ email }, { username }] });
  if (userExists) {
    throw new Error('E-mail ou nome de usuário já existe');
  }

  // cria a senha criptografada
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    // cria o usuário no banco de dados
    const newUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    return newUser;
  } catch (error) {
    throw new Error('Erro ao registrar usuário: ' + error.message);
  }
};

// função para fazer login e gerar o token + retornar userId
const login = async (usernameOrEmail, password) => {
  const user = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] }).select('+password');

  if (!user) {
    throw new Error('E-mail ou nome de usuário inválido');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Senha incorreta');
  }

  // cria o token JWT
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { token, userId: user._id.toString() };
};

export default { register, login };
