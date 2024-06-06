const tariffRouter = require('express').Router();
const { Price } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');
const Tariff = require('../views/Tariff');

tariffRouter.get('/', async (req, res) => {
  try {
    const { login } = req.session;
    const prices = await Price.findAll({ raw: true });
    renderTemplate(Tariff, { prices, login }, res);
  } catch (err) {
    console.log(err);
  }
});

tariffRouter.patch('/', async (req, res) => {
  try {
    const { newPrice, id } = req.body;
    console.log('router>>>>', newPrice, id);
    await Price.update({ cost: newPrice }, { where: { id } });
    res.json({ status: 'success' });
  } catch (err) {
    console.log(err);
  }
});

module.exports = tariffRouter;
