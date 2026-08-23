const express = require('express');
const {
  createLead,
  getLeads,
  getLead,
  updateLead,
  deleteLead,
} = require('../controllers/leadController');
const { protect, authorize } = require('../middlewares/auth');
const { formLimiter } = require('../middlewares/rateLimiter');
const { leadValidator } = require('../validators/leadValidators');
const validate = require('../middlewares/validate');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();
const staff = [USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN];

router.post('/', formLimiter, leadValidator, validate, createLead);
router.get('/', protect, authorize(...staff), getLeads);
router.get('/:id', protect, authorize(...staff), getLead);
router.put('/:id', protect, authorize(...staff), updateLead);
router.delete('/:id', protect, authorize(...staff), deleteLead);

module.exports = router;
