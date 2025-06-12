import Comment from '../models/Comment.js'; // Importando o modelo do comentário
import User from '../models/User.js'; // Importando o modelo do usuário

// Função para criar um comentário
export async function createComment(data) {
  try {
    const { userId, restaurantName, cuisineType, dishes } = data;

    // Verificar se o usuário existe
    const userExists = await User.findById(userId);
    if (!userExists) {
      throw new Error('Usuário não encontrado.');
    }

    // Criar o comentário com restaurante, cozinha e pratos
    const newComment = await Comment.create({
      userId,
      restaurantName,
      cuisineType,
      dishes,
    });
    return newComment;
  } catch (error) {
    throw new Error(`Erro ao criar comentário: ${error.message}`);
  }
}

// Função para obter todos os comentários
export async function getAllComments() {
  try {
    const comments = await Comment.find()
      .sort({ createdAt: -1 })
      .populate('userId', 'name email');  // Populando com os dados do usuário (opcional)
    return comments;
  } catch (error) {
    throw new Error(`Erro ao carregar comentários: ${error.message}`);
  }
}

// Função para atualizar um comentário (agora permitindo atualizar todos os campos)
export async function updateComment(commentId, data) {
  try {
    // Atualiza todos os campos do comentário, incluindo nome, tipo de cozinha e pratos
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      {
        restaurantName: data.restaurantName,
        cuisineType: data.cuisineType,
        dishes: data.dishes,
      },
      { new: true } // Retorna o comentário atualizado
    );

    if (!updatedComment) {
      throw new Error('Comentário não encontrado.');
    }

    return updatedComment; // Retorna o comentário atualizado
  } catch (error) {
    throw new Error(`Erro ao atualizar comentário: ${error.message}`);
  }
}

// Função para deletar um comentário
export async function deleteComment(commentId) {
  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      throw new Error('Comentário não encontrado.');
    }

    return deletedComment;
  } catch (error) {
    throw new Error(`Erro ao deletar comentário: ${error.message}`);
  }
}
