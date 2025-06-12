import express from 'express';
import * as searchHistoryController from '../controllers/search-history.controller.js';
import verifyToken from "../middlewares/jwt.token.middleware.js";  

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Search History
 *   description: Rotas para gerenciamento do histórico de buscas
 */

/**
 * @swagger
 * /search-history:
 *   post:
 *     summary: Adiciona uma nova busca ao histórico
 *     tags: [Search History]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *                 description: Texto da busca realizada
 *                 example: "restaurantes vegetarianos"
 *     responses:
 *       201:
 *         description: Busca adicionada ao histórico com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou não fornecido
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /search-history:
 *   get:
 *     summary: Retorna o histórico recente de buscas do usuário
 *     tags: [Search History]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Histórico de buscas retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   query:
 *                     type: string
 *                     description: Texto da busca
 *                   date:
 *                     type: string
 *                     format: date-time
 *                     description: Data e hora da busca
 *       401:
 *         description: Token inválido ou não fornecido
 *       500:
 *         description: Erro interno do servidor
 */

router.post('/search-history', verifyToken, searchHistoryController.createSearchHistory);
router.get('/search-history', verifyToken, searchHistoryController.getRecentSearches);

export default router;
