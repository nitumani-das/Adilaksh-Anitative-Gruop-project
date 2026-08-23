const mongoose = require('mongoose');
const { LEAD_TYPES, LEAD_STATUS } = require('../config/constants');

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, trim: true, default: '' },
    country: { type: String, trim: true, default: '' },
    enquiryType: {
      type: String,
      enum: Object.values(LEAD_TYPES),
      default: LEAD_TYPES.GENERAL,
    },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: String, default: '' },
    message: { type: String, trim: true, default: '' },
    status: {
      type: String,
      enum: Object.values(LEAD_STATUS),
      default: LEAD_STATUS.NEW,
    },
    source: { type: String, default: 'website' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', leadSchema);
