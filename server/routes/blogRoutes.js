const express = require('express');
const {
  getBlogs,
  getBlogBySlug,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');
const { protect, authorize } = require('../middlewares/auth');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();
const staff = [USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN, USER_ROLES.EDITOR, USER_ROLES.CONTENT_MANAGER];

router.get('/', getBlogs);
router.get('/id/:id', protect, authorize(...staff), getBlogById);
router.get('/:slug', getBlogBySlug);

router.post('/', protect, authorize(...staff), createBlog);
router.put('/:id', protect, authorize(...staff), updateBlog);
router.delete('/:id', protect, authorize(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN), deleteBlog);

module.exports = router;
