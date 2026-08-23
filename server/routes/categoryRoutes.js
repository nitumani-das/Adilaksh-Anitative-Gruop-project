const express = require('express');
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');
const { protect, authorize } = require('../middlewares/auth');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();
const staff = [USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN, USER_ROLES.CONTENT_MANAGER];

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', protect, authorize(...staff), createCategory);
router.put('/:id', protect, authorize(...staff), updateCategory);
router.delete('/:id', protect, authorize(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN), deleteCategory);

module.exports = router;
