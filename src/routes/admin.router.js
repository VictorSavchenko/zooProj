require('dotenv').config();
const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../utils/renderTemplate');

const AdminView = require('../views/Admin');

const { Admin } = require('../../db/models');

const { checkUser, secureRoute } = require('../middleware/common');

loginRouter.get('/', (req, res) => {
  const status = req.session?.login;
  renderTemplate(AdminView, { status }, res);
});

loginRouter.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const admin = await Admin.findOne({ where: { login } });
    if (!admin) {
      console.log('User not found');
      res.json({ logErr: 'Вы не являетесь администратором' });
    } else {
      const checkPass = await bcrypt.compare(password, admin.password);
      if (checkPass) {
        req.session.login = admin.login;
        req.session.save(() => {
          console.log('Password correct. Session saved');
          res.status(200).json({ status: 'success' });
        });
      } else {
        console.log('Wrong password');
        res.json({ pasErr: 'Неверный пароль' });
      }
    }
  } catch (error) {
    console.log(`loginRouter.post =>`, error);
  }
});

loginRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.redirect('/admin');
  });
});

module.exports = loginRouter;
