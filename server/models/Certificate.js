const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    issuingBody: { type: String, trim: true, default: '' },
    image: { type: String, required: true },
    description: { type: String, trim: true, default: '' },
    validTill: { type: Date },
    displayOrder: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Certificate', certificateSchema);
