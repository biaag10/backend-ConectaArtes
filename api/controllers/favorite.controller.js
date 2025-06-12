import * as favoriteService from '../services/favorite.service.js';

export async function addFavorite(req, res) {
  try {
    const { restaurantId, restaurantName, restaurantLocation } = req.body;
    const userId = req.userId;  // Obtendo o userId do token JWT
    const result = await favoriteService.addFavorite({
      userId,
      restaurantId,
      restaurantName,
      restaurantLocation,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function removeFavorite(req, res) {
  try {
    const { userId, restaurantId } = req.params;
    const result = await favoriteService.removeFavorite(userId, restaurantId);
    res.json({ deletedCount: result.deletedCount });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getFavorites(req, res) {
  try {
    const userId = req.userId;  // Obtendo o userId do token JWT
    const results = await favoriteService.getFavorites(userId);
    res.json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
