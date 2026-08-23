const express = require('express');
const upload = require('../middlewares/upload');
const { protect, authorize } = require('../middlewares/auth');
const sendResponse = require('../utils/apiResponse');
const ApiError = require('../utils/ApiError');
const fs = require('fs');
const path = require('path');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();
const staff = [USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN, USER_ROLES.CONTENT_MANAGER, USER_ROLES.EDITOR];

// @desc    Upload a single media file (image or PDF)
// @route   POST /api/media/upload
// @access  Private (staff)
router.post('/upload', protect, authorize(...staff), upload.single('file'), (req, res) => {
  if (!req.file) throw new ApiError(400, 'No file uploaded');
  sendResponse(res, 201, 'File uploaded successfully', {
    filename: req.file.filename,
    url: `/uploads/${req.file.filename}`,
  });
});

// @desc    Delete a media file by filename
// @route   DELETE /api/media/:filename
// @access  Private (staff)
router.delete('/:filename', protect, authorize(...staff), (req, res) => {
  const filePath = path.join(__dirname, '..', 'uploads', req.params.filename);
  if (!fs.existsSync(filePath)) throw new ApiError(404, 'File not found');
  fs.unlinkSync(filePath);
  sendResponse(res, 200, 'File deleted successfully');
});

module.exports = router;
