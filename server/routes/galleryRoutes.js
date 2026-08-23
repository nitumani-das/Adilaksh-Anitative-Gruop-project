const express = require('express');
const {
  getGalleryItems,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} = require('../controllers/galleryController');
const { protect, authorize } = require('../middlewares/auth');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();
const staff = [USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN, USER_ROLES.CONTENT_MANAGER];

router.get('/', getGalleryItems);
router.post('/', protect, authorize(...staff), createGalleryItem);
router.put('/:id', protect, authorize(...staff), updateGalleryItem);
router.delete('/:id', protect, authorize(...staff), deleteGalleryItem);

module.exports = router;
