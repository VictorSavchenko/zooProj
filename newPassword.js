require('dotenv').config();
const bcrypt = require('bcrypt');
const { Admin } = require('./db/models');

const createAdmin = async () => {
  const newPas = '123';
  const hash = await bcrypt.hash(newPas, 5);
  try {
    const admin = await Admin.create({
      login: 'admin',
      password: hash,
    });
    console.log('result ', admin);
  } catch (error) {
    console.log('error pass', error);
  }
};

// createAdmin();