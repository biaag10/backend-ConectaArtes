import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurantId: { type: String, required: true }, // fsq_id da API Foursquare
    restaurantName: { type: String, required: true },
    restaurantLocation: { type: String, required: true },
  },
  { timestamps: { createdAt: 'addedAt', updatedAt: false } }
);

export default mongoose.model('Favorite', FavoriteSchema);
