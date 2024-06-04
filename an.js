const animals = Animal.findAll({
    include: [{
      model: Photo,
      as: 'images',
      where: { animalId: Sequelize.col('animal.id'),} //
    }]
  })
  console.log('+++++', animals)
  