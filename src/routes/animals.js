const animalsRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const animalPage = require('../views/Animals');
const everyPage = require('../views/EveryAnimal');
const { Animal, Photo } = require('../../db/models');

animalsRouter.get('/', async (req, res) => {
  const { login } = req.session;
  try {
    const animals = await Animal.findAll({
      include: [{
        model: Photo,
      }],
    });
    renderTemplate(animalPage, { login, animals }, res);
  } catch (error) {
    console.log('++++', error);
    res.redirect('/animals');
  }
});

animalsRouter.post('/', async (req, res) => {
  const { name, img, text } = req.body;
  try {
    const animal = await Animal.create({ name, text });
    const images = [];
    const image = await Photo.create({ img, animalId: animal.id });
    if (req.body.arr) {
      for (let i = 0; i <= req.body.arr.length - 1; i += 1) {
        const img = await Photo.create({ img: req.body.arr[i], animalId: animal.id });
        images.push(img);
      }
    }
    res.json({
      status: 'success', animal, image, images,
    });
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
  const { login } = req.session;
  try {
    const animal = await Animal.findOne({ where: { id: req.params.id } });
    const images = await Photo.findAll({ where: { animalId: animal.id } });

    renderTemplate(everyPage, { login, animal, images }, res);
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

animalsRouter.post('/:id', async (req, res) => {
  const { img, id } = req.body;
  try {
    const image = await Photo.create({ img, animalId: id });

    res.json({ status: 'success', image });
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

animalsRouter.patch('/images/:id', async (req, res) => {
  try {
    const { img, photoId } = req.body;
    await Photo.update(
      {
        img,
      },
      {
        where: {
          id: photoId,
        },
      },
    );
    res.json({ change: 'success' });
  } catch (err) {
    console.log(err);
    res.redirect(`/animals/${req.params.id}`);
  }
});

animalsRouter.delete('/images/:id', async (req, res) => {
  try {
    const { photoId } = req.body;
    await Photo.destroy({
      where: {
        id: photoId,
      },
    });
    res.json({ change: 'success' });
  } catch (err) {
    console.log(err);
    res.redirect(`/animals/${req.params.id}`);
  }
});

module.exports = animalsRouter;
