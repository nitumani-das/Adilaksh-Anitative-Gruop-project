const express = require('express');
const {
  getCertificates,
  createCertificate,
  updateCertificate,
  deleteCertificate,
} = require('../controllers/certificateController');
const { protect, authorize } = require('../middlewares/auth');
const { USER_ROLES } = require('../config/constants');

const router = express.Router();
const staff = [USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN, USER_ROLES.CONTENT_MANAGER];

router.get('/', getCertificates);
router.post('/', protect, authorize(...staff), createCertificate);
router.put('/:id', protect, authorize(...staff), updateCertificate);
router.delete('/:id', protect, authorize(...staff), deleteCertificate);

module.exports = router;
