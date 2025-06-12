import mongoose from 'mongoose';

const SearchHistorySchema = new mongoose.Schema(
    {
        cep: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
        ipAddress: { type: String, required: false },
    },
    { timestamps: { createdAt: 'searchedAt', updatedAt: false } }
);

export default mongoose.model('SearchHistory', SearchHistorySchema);
