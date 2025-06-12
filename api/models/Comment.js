import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    restaurantName: {
      type: String,
      required: true,
    },
    cuisineType: {
      type: String,
      required: true,
    },
    dishes: [{
      name: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      comment: {
        type: String,
        required: true,
      },
      photoUrl: {
        type: String,
        default: null,
      },
    }],
  },
  { timestamps: true }
);

export default mongoose.model('Comment', CommentSchema);
