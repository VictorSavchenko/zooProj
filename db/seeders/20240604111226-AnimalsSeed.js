'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Animals', [
      {
        name: 'Слон Джон',
        text: 'Джон умеет здороваться хоботом',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Орел Сан',
        text: 'Размах крыльев у него 2,4 м',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тигр Никола',
        text: 'Бдизко не подходить!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Animals', null, {});
  }
};
