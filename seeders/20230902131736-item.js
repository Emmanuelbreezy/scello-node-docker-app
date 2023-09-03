'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Item', [
      { name: 'Laptop', price: 799 },
      { name: 'Smartphone', price: 500 },
      { name: 'Headphones', price: 150 },
      { name: 'Tablet', price: 290 },
      { name: 'Keyboard', price: 130 },
      { name: 'Mouse', price: 80 },
      { name: 'Monitor', price: 350 },
      { name: 'Printer', price: 245 },
      { name: 'Scanner', price: 170 },
      { name: 'External Hard Drive', price: 500 },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Item', null, {});
  }
};
