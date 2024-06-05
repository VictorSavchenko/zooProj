const tariffRouter = require('express').Router();
const { Price } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');
const Tariff = require('../views/Tariff');

tariffRouter.get('/', async (req, res) => {
  try {
    const prices = await Price.findAll({ raw: true });
    console.log(prices);
    renderTemplate(Tariff, { prices }, res);
  } catch (err) {
    console.log(err);
  }
});

module.exports = tariffRouter;
