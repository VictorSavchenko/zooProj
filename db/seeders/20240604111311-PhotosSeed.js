'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Elephas_maximus_%28Bandipur%29.jpg/2560px-Elephas_maximus_%28Bandipur%29.jpg',
        animalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Loxodontacyclotis.jpg/2560px-Loxodontacyclotis.jpg',
        animalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Asian_Elephant%2C_Royal_Chitwan_National_Park.jpg',
        animalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Booted_eagle_in_flight.jpg',
        animalId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Eagle_Lahore_Zoo_June302005.jpg',
        animalId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/5/57/CircaetusGallicus.jpg',
        animalId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/2012_Suedchinesischer_Tiger.JPG/2560px-2012_Suedchinesischer_Tiger.JPG',
        animalId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/2560px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg',
        animalId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Panthera_tigris_sumatrae_%28Sumatran_Tiger%29_close-up.jpg',
        animalId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
