const express = require('express');
const { getSettings, updateSettings } = require('../controllers/settingsController');
const { protect, authorize } = require('../middlewares/auth');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();

router.get('/', getSettings);
router.put(
  '/',
  protect,
  authorize(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN),
  updateSettings
);

module.exports = router;
