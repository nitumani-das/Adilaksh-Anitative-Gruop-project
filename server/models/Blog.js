const mongoose = require('mongoose');
const slugify = require('slugify');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, index: true },
    category: { type: String, trim: true, default: 'General' },
    excerpt: { type: String, trim: true, maxlength: 300 },
    content: { type: String, required: true },
    featuredImage: { type: String, default: '' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tags: [{ type: String }],
    isPublished: { type: Boolean, default: false },
    publishedAt: { type: Date },
    metaTitle: { type: String, default: '' },
    metaDescription: { type: String, default: '' },
  },
  { timestamps: true }
);

blogSchema.pre('validate', function generateSlug(next) {
  if (this.title) this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

module.exports = mongoose.model('Blog', blogSchema);
