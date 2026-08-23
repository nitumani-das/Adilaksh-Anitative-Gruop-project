const { body } = require('express-validator');
const { LEAD_TYPES } = require('../config/constants');

const leadValidator = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('A valid email is required').normalizeEmail(),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('enquiryType')
    .optional()
    .isIn(Object.values(LEAD_TYPES))
    .withMessage('Invalid enquiry type'),
  body('message').optional().isLength({ max: 2000 }).withMessage('Message too long'),
];

module.exports = { leadValidator };
