// scripts/createAdmin.js
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');

async function createAdmin() {
  await mongoose.connect('mongodb://localhost:27017/yourdatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const hashedPassword = await bcrypt.hash('adminpassword', 10);

  const admin = new User({
    name: 'Admin',
    surname: 'Adminov',
    email: 'admin@example.com',
    username: 'admin',
    password: hashedPassword,
    role: 'admin',
    isVerified: true, // Админ сразу верифицирован
  });

  await admin.save();
  console.log('Admin created successfully');
  mongoose.connection.close();
}

createAdmin().catch((err) => console.error(err));
