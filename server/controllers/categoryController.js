const Category = require('../models/Category');
const factory = require('./handlerFactory');

module.exports = {
  getCategories: factory.getAll(Category, { defaultSort: 'displayOrder' }),
  getCategory: factory.getOne(Category),
  createCategory: factory.createOne(Category),
  updateCategory: factory.updateOne(Category),
  deleteCategory: factory.deleteOne(Category),
};
