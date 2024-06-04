const farmRouter = require('express').Router();
const renderTemplate = require('../utilites/renderTemplate');
const animalPage = require('../views/Animals');
const { Animal, Photo } = require('../../db/models');

farmRouter.get('/:id', async (req, res) => {
  const { login } = req.session;
  try { 
    const animals = Animal.findAll({
      include: [{
        model: Photo,
        as: 'images',
        where: { animalId: Sequelize.col('animal.id'),} //
      }]
    })
    console.log('+++++', animals)

    // const farm = await Farm.findOne({ where: { id: req.params.id } }); //!
    // const pets = await Pet.findAll({ where: { farm_id: farm.id} });
    // let farmUser;

    // if(login) {
    //   const user = await User.findOne({ where: { email } });
    //   if(farm.user_id === user.id) {
    //     farmUser = true;
    //   } else {
    //     farmUser = false;
    //   }
    //   renderTemplate(animalPage, { email, farm, farmUser, pets }, res);

    // } else {
    //   farmUser = false;
      // renderTemplate(animalPage, { login, animals }, res);
    // }
  
  } catch (error) {
    console.log(error);
    res.redirect(`/farm/${req.params.id}`);
  }

});

farmRouter.post('/:id', async (req, res) => {
  const { name, img } = req.body;
  try {
    const pet = await Pet.create({ name, img, farm_id: req.params.id });
    res.json({ status: 'success', pet})
  } catch (error) {
    console.log(error);
    res.redirect(`/farm/${req.params.id}`);
  }
});

farmRouter.put('/:id', async (req, res) => {
  const { name, img, id } = req.body;
  try {
    await Pet.update(
      {
        name, 
        img
      },
      { where: { id } },
    );
    res.json({ status: 'success' });

  } catch (error) {
    console.log(error);
    res.redirect(`/farm/${req.params.id}`);
  }
});

farmRouter.delete('/:id', async (req, res) => {     //!!
  try{
    const { pet_id } = req.body;
    await Pet.destroy({
    where: {
      id: pet_id
    },
  });
  res.json({ change: 'success'})

  } catch(err) {
    console.log(err);
    res.redirect(`/farm/${req.params.id}`);
  }
});

module.exports = farmRouter;