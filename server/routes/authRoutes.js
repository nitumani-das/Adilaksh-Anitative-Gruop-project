const express = require('express');
const { register, login, logout, getMe } = require('../controllers/authController');
const { protect, authorize } = require('../middlewares/auth');
const { authLimiter } = require('../middlewares/rateLimiter');
const { registerValidator, loginValidator } = require('../validators/authValidators');
const validate = require('../middlewares/validate');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();

router.post(
  '/register',
  protect,
  authorize(USER_ROLES.SUPER_ADMIN),
  registerValidator,
  validate,
  register
);
router.post('/login', authLimiter, loginValidator, validate, login);
router.post('/logout', protect, logout);
router.get('/me', protect, getMe);

module.exports = router;
