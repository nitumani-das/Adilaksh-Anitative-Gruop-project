const express = require('express');
const {
  subscribe,
  unsubscribe,
  getSubscribers,
  deleteSubscriber,
} = require('../controllers/subscriberController');
const { protect, authorize } = require('../middlewares/auth');
const { formLimiter } = require('../middlewares/rateLimiter');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();
const staff = [USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN];

router.post('/', formLimiter, subscribe);
router.post('/unsubscribe', unsubscribe);
router.get('/', protect, authorize(...staff), getSubscribers);
router.delete('/:id', protect, authorize(...staff), deleteSubscriber);

module.exports = router;
