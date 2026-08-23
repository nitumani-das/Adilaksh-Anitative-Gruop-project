const express = require('express');
const {
  getProducts,
  getProductBySlug,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect, authorize } = require('../middlewares/auth');
const { productValidator } = require('../validators/productValidators');
const validate = require('../middlewares/validate');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();
const staff = [USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN, USER_ROLES.CONTENT_MANAGER];

router.get('/', getProducts);
router.get('/id/:id', getProductById);
router.get('/:slug', getProductBySlug);

router.post('/', protect, authorize(...staff), productValidator, validate, createProduct);
router.put('/:id', protect, authorize(...staff), updateProduct);
router.delete('/:id', protect, authorize(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN), deleteProduct);

module.exports = router;
