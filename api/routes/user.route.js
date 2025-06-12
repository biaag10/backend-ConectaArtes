import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Rotas para registro e login de usuários
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - username
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário
 *                 example: Pedro Lima
 *               username:
 *                 type: string
 *                 description: Nome de usuário
 *                 example: pedrolima
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email do usuário
 *                 example: pedro.lima@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Senha do usuário (mínimo 6 caracteres)
 *                 example: Senha123!
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuário registrado com sucesso!
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     username:
 *                       type: string
 *                     email:
 *                       type: string
 *       400:
 *         description: Dados inválidos ou usuário já existe
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/register', userController.register);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Autentica um usuário e retorna um token JWT
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email do usuário
 *                 example: joao.silva@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Senha do usuário
 *                 example: Senha123!
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT para autenticação
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Email ou senha inválidos
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/login', userController.login);

export default router;

