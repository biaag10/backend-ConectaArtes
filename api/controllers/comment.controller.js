import * as commentService from '../services/comment.service.js';

export async function createComment(req, res) {
  try {
    const { userId } = req; // Assumindo que o userId vem do token
    const { restaurantName, cuisineType, dishes } = req.body;

    // Validar se ao menos um prato foi enviado
    if (!dishes || dishes.length === 0) {
      return res.status(400).json({ message: 'É necessário adicionar pelo menos um prato.' });
    }

    // Criar o comentário com nome do restaurante, tipo de cozinha e pratos
    const newComment = await commentService.createComment({ userId, restaurantName, cuisineType, dishes });
    res.status(201).json({
      success: true,
      message: 'Comentário criado com sucesso.',
      comment: newComment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Erro ao criar comentário.',
      error: error.message,
    });
  }
}

export async function getAllComments(req, res) {
  try {
    const comments = await commentService.getAllComments();
    res.status(200).json({
      success: true,
      message: 'Lista de comentários carregada com sucesso.',
      comments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao carregar comentários.',
      error: error.message,
    });
  }
}

export async function updateComment(req, res) {
  try {
    const { id } = req.params;
    const { restaurantName, cuisineType, dishes } = req.body;

    // Verifique se os campos necessários estão presentes
    if (!restaurantName || !cuisineType || !dishes || dishes.length === 0) {
      return res.status(400).json({ message: 'Todos os campos (nome, tipo e pratos) devem ser preenchidos.' });
    }

    // Atualiza o comentário com todos os campos possíveis
    const updatedComment = await commentService.updateComment(id, { restaurantName, cuisineType, dishes });

    if (!updatedComment) {
      return res.status(404).json({ message: 'Comentário não encontrado.' });
    }

    res.status(200).json({
      success: true,
      message: 'Comentário atualizado com sucesso.',
      comment: updatedComment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Erro ao atualizar comentário.',
      error: error.message,
    });
  }
}

export async function deleteComment(req, res) {
  try {
    const { id } = req.params;
    const deletedComment = await commentService.deleteComment(id);

    if (!deletedComment) {
      return res.status(404).json({ message: 'Comentário não encontrado para exclusão.' });
    }

    res.status(200).json({
      success: true,
      message: 'Comentário deletado com sucesso.',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Erro ao deletar comentário.',
      error: error.message,
    });
  }
}
