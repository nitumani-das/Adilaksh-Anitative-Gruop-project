const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, default: '' },
    image: { type: String, required: true },
    category: {
      type: String,
      enum: ['manufacturing', 'warehouse', 'packaging', 'facility', 'other'],
      default: 'other',
    },
    displayOrder: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Gallery', gallerySchema);
