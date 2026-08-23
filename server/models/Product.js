const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, index: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    shortDescription: { type: String, trim: true, maxlength: 300 },
    description: { type: String, trim: true },
    images: [{ type: String }],
    specifications: [{ label: String, value: String }],
    packagingOptions: [{ type: String }],
    uses: [{ type: String }],
    benefits: [{ type: String }],
    originCountry: { type: String, default: 'India' },
    minOrderQuantity: { type: String, default: '' },
    catalogueFile: { type: String, default: '' },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    metaTitle: { type: String, default: '' },
    metaDescription: { type: String, default: '' },
  },
  { timestamps: true }
);

productSchema.pre('validate', function generateSlug(next) {
  if (this.name) this.slug = slugify(this.name, { lower: true, strict: true });
  next();
});

productSchema.index({ name: 'text', shortDescription: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);
