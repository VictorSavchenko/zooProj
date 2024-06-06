const indexRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Main = require('../views/Main');

indexRouter.get('/', async (req, res) => {
  try {
    renderTemplate(Main, {}, res);
  } catch (error) {
    res.send(`Main page error: , ${error}`);
  }
});

module.exports = indexRouter;
