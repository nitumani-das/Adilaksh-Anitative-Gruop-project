const Gallery = require('../models/Gallery');
const factory = require('./handlerFactory');

module.exports = {
  getGalleryItems: factory.getAll(Gallery, { defaultSort: 'displayOrder' }),
  createGalleryItem: factory.createOne(Gallery),
  updateGalleryItem: factory.updateOne(Gallery),
  deleteGalleryItem: factory.deleteOne(Gallery),
};
