import Favorite from '../models/Favorite.js';

export async function addFavorite(data) {
  const exists = await Favorite.findOne({ userId: data.userId, restaurantId: data.restaurantId });
  if (exists) throw new Error('Restaurante já favoritado.');

  const fav = new Favorite(data);
  return fav.save();
}

export async function removeFavorite(userId, restaurantId) {
  return Favorite.deleteOne({ userId, restaurantId });
}

export async function getFavorites(userId) {
  return Favorite.find({ userId });
}
