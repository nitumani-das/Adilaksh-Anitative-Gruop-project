const Product = require('../models/Product');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const sendResponse = require('../utils/apiResponse');
const factory = require('./handlerFactory');

// @desc    List products with optional category, search, and featured filters
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const { category, search, featured, page = 1, limit = 12 } = req.query;

  const filter = { isActive: true };
  if (category) filter.category = category;
  if (featured === 'true') filter.isFeatured = true;
  if (search) filter.$text = { $search: search };

  const skip = (Number(page) - 1) * Number(limit);

  const [items, total] = await Promise.all([
    Product.find(filter)
      .populate('category', 'name slug')
      .sort('-createdAt')
      .skip(skip)
      .limit(Number(limit)),
    Product.countDocuments(filter),
  ]);

  sendResponse(res, 200, 'Products fetched', items, {
    page: Number(page),
    limit: Number(limit),
    total,
    totalPages: Math.ceil(total / Number(limit)),
  });
});

// @desc    Get single product by slug
// @route   GET /api/products/:slug
// @access  Public
const getProductBySlug = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug, isActive: true }).populate(
    'category',
    'name slug'
  );
  if (!product) throw new ApiError(404, 'Product not found');
  sendResponse(res, 200, 'Product fetched', product);
});

module.exports = {
  getProducts,
  getProductBySlug,
  createProduct: factory.createOne(Product),
  updateProduct: factory.updateOne(Product),
  deleteProduct: factory.deleteOne(Product),
  getProductById: factory.getOne(Product, { populate: 'category' }),
};
