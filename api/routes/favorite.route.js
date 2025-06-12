import express from 'express';
import * as favoriteController from '../controllers/favorite.controller.js';
import verifyToken from "../middlewares/jwt.token.middleware.js";  

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Favorites
 *   description: Rotas para gerenciar favoritos
 */

/**
 * @swagger
 * /favorites:
 *   post:
 *     summary: Adiciona um restaurante aos favoritos do usuário
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - restaurantId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID do usuário
 *                 example: "12345"
 *               restaurantId:
 *                 type: string
 *                 description: ID do restaurante
 *                 example: "67890"
 *     responses:
 *       201:
 *         description: Restaurante adicionado aos favoritos com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou não fornecido
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /favorites/{userId}/{restaurantId}:
 *   delete:
 *     summary: Remove um restaurante dos favoritos do usuário
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *           example: "12345"
 *       - name: restaurantId
 *         in: path
 *         required: true
 *         description: ID do restaurante
 *         schema:
 *           type: string
 *           example: "67890"
 *     responses:
 *       200:
 *         description: Restaurante removido dos favoritos com sucesso
 *       401:
 *         description: Token inválido ou não fornecido
 *       404:
 *         description: Favorito não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /favorites/{userId}:
 *   get:
 *     summary: Retorna a lista de restaurantes favoritos do usuário
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *           example: "12345"
 *     responses:
 *       200:
 *         description: Lista de favoritos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   restaurantId:
 *                     type: string
 *                   name:
 *                     type: string
 *                   address:
 *                     type: string
 *       401:
 *         description: Token inválido ou não fornecido
 *       500:
 *         description: Erro interno do servidor
 */

router.post('/', verifyToken,  favoriteController.addFavorite);
router.delete('/:userId/:restaurantId', verifyToken, favoriteController.removeFavorite);
router.get('/:userId', verifyToken, favoriteController.getFavorites);

export default router;
