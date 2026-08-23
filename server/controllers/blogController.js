const Blog = require('../models/Blog');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const sendResponse = require('../utils/apiResponse');
const factory = require('./handlerFactory');

// @desc    List published blogs (public) with optional category filter
// @route   GET /api/blogs
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
  const { category, page = 1, limit = 9 } = req.query;
  const filter = { isPublished: true };
  if (category) filter.category = category;

  const skip = (Number(page) - 1) * Number(limit);
  const [items, total] = await Promise.all([
    Blog.find(filter)
      .populate('author', 'name')
      .sort('-publishedAt')
      .skip(skip)
      .limit(Number(limit)),
    Blog.countDocuments(filter),
  ]);

  sendResponse(res, 200, 'Blogs fetched', items, {
    page: Number(page),
    limit: Number(limit),
    total,
    totalPages: Math.ceil(total / Number(limit)),
  });
});

// @desc    Get single published blog by slug, plus related posts
// @route   GET /api/blogs/:slug
// @access  Public
const getBlogBySlug = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true }).populate(
    'author',
    'name'
  );
  if (!blog) throw new ApiError(404, 'Blog post not found');

  const related = await Blog.find({
    _id: { $ne: blog._id },
    category: blog.category,
    isPublished: true,
  })
    .limit(3)
    .select('title slug featuredImage excerpt');

  sendResponse(res, 200, 'Blog fetched', { blog, related });
});

module.exports = {
  getBlogs,
  getBlogBySlug,
  createBlog: factory.createOne(Blog),
  updateBlog: factory.updateOne(Blog),
  deleteBlog: factory.deleteOne(Blog),
  getBlogById: factory.getOne(Blog),
};
