require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const { USER_ROLES } = require('../config/constants');

const seed = async () => {
  await connectDB();

  const existingAdmin = await User.findOne({ role: USER_ROLES.SUPER_ADMIN });
  if (!existingAdmin) {
    await User.create({
      name: 'Super Admin',
      email: 'admin@herbalspiceco.com',
      password: 'ChangeMe123!',
      role: USER_ROLES.SUPER_ADMIN,
    });
    console.log('Super admin created: admin@herbalspiceco.com / ChangeMe123!');
  }

  const spices = await Category.findOneAndUpdate(
    { name: 'Whole Spices' },
    { name: 'Whole Spices', description: 'Premium single-origin whole spices' },
    { upsert: true, new: true }
  );

  await Product.findOneAndUpdate(
    { name: 'Organic Green Cardamom' },
    {
      name: 'Organic Green Cardamom',
      category: spices._id,
      shortDescription: 'Aromatic, hand-picked green cardamom pods.',
      description: 'Sourced from high-altitude estates, sun-dried and hand-sorted for size and aroma.',
      uses: ['Culinary', 'Ayurvedic', 'Beverages'],
      benefits: ['Digestive aid', 'Rich in antioxidants'],
      packagingOptions: ['1kg pouch', '5kg box', '25kg export sack'],
      isFeatured: true,
    },
    { upsert: true, new: true }
  );

  console.log('Seed complete.');
  await mongoose.disconnect();
  process.exit(0);
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
