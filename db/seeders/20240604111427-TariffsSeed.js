'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Prices', [
      {
        tariff: 'Взрослые в выходные',
        cost: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tariff: 'Взрослые в будни',
        cost: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tariff: 'Дети в выходные',
        cost: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tariff: 'Взрослые в будни',
        cost: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Prices', null, {});
  }
};
