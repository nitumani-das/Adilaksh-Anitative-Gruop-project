const express = require('express');

const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes');
const blogRoutes = require('./blogRoutes');
const leadRoutes = require('./leadRoutes');
const subscriberRoutes = require('./subscriberRoutes');
const galleryRoutes = require('./galleryRoutes');
const certificateRoutes = require('./certificateRoutes');
const settingsRoutes = require('./settingsRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const mediaRoutes = require('./mediaRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/blogs', blogRoutes);
router.use('/leads', leadRoutes);
router.use('/subscribers', subscriberRoutes);
router.use('/gallery', galleryRoutes);
router.use('/certificates', certificateRoutes);
router.use('/settings', settingsRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/media', mediaRoutes);

module.exports = router;
