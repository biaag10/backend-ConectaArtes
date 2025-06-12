import express from 'express';
import * as commentController from '../controllers/comment.controller.js';
import verifyToken from '../middlewares/jwt.token.middleware.js';

const router = express.Router();

// Rota para criar um comentário
router.post('/create', verifyToken, commentController.createComment);

// Rota para obter todos os comentários
router.get('/list', verifyToken, commentController.getAllComments);

// Rota para atualizar um comentário
router.patch('/update/:id', verifyToken, commentController.updateComment);

// Rota para deletar um comentário
router.delete('/delete/:id', verifyToken, commentController.deleteComment);

export default router;
