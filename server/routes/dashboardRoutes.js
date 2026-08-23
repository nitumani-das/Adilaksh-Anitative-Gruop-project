const express = require('express');
const { getStats } = require('../controllers/dashboardController');
const { protect, authorize } = require('../middlewares/auth');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();

router.get(
  '/stats',
  protect,
  authorize(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN, USER_ROLES.VIEWER),
  getStats
);

module.exports = router;
