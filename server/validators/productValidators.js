const { body } = require('express-validator');

const productValidator = [
  body('name').trim().notEmpty().withMessage('Product name is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('shortDescription')
    .optional()
    .isLength({ max: 300 })
    .withMessage('Short description must be under 300 characters'),
];

module.exports = { productValidator };
