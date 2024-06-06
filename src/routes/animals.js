const animalsRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const animalPage = require('../views/Animals');
const everyPage = require('../views/EveryAnimal');
const { Animal, Photo } = require('../../db/models');

animalsRouter.get('/', async (req, res) => {
  // const { login } = req.session;
  try {
    const animals = await Animal.findAll({
      include: [{
        model: Photo,
      }],
    });
    const login = true;
    // console.log('======', animals);
    // console.log('======', animals[1].Photos);

    renderTemplate(animalPage, { login, animals }, res);
  } catch (error) {
    console.log('++++', error);
    res.redirect('/animals');
  }
});

animalsRouter.post('/', async (req, res) => {
  const { name, img, text } = req.body;
  try {
    console.log('+++++++', req.body);
    const animal = await Animal.create({ name, text });
    const image = await Photo.create({ img, animalId: animal.id });
    res.json({ status: 'success', animal, image });
  } catch (error) {
    console.log(error);
  }
});

animalsRouter.delete('/', async (req, res) => {
  try {
    const { animalId } = req.body;
    await Animal.destroy({
      where: {
        id: animalId,
      },
    });
    res.json({ change: 'success' });
  } catch (err) {
    console.log(err);
    res.redirect('/animals');
  }
});

animalsRouter.get('/:id', async (req, res) => {
  try {
    const animal = await Animal.findOne({ where: { id: req.params.id } });
    const images = await Photo.findAll({ where: { animalId: animal.id } });

    renderTemplate(everyPage, { animal, images }, res);
  } catch (error) {
    console.log(error);
    res.redirect(`/animals/${req.params.id}`);
  }
});

animalsRouter.put('/:id', async (req, res) => {
  const { name, text, id } = req.body;
  try {
    await Animal.update(
      {
        name,
        text,
      },
      { where: { id } },
    );
    res.json({ status: 'success' });
  } catch (error) {
    console.log(error);
    res.redirect(`/animals/${req.params.id}`);
  }
});

animalsRouter.delete('/:id', async (req, res) => {
  try {
    await Animal.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ change: 'success' });
  } catch (err) {
    console.log(err);
    res.redirect(`/animals/${req.params.id}`);
  }
});

animalsRouter.delete('/images/:id', async (req, res) => {
  try {
    const { animalId } = req.body;
    await Photo.destroy({
      where: {
        id: animalId,
      },
    });
    res.json({ change: 'success' });
  } catch (err) {
    console.log(err);
    res.redirect(`/animals/${req.params.id}`);
  }
});

module.exports = animalsRouter;

