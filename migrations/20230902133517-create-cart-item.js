'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CartItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Items',
        //   key: 'id',
        //   as: 'item',
        // },
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      cartId: { 
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Carts',
        //   key: 'id',
        //   as: 'cartId',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CartItems');
  }
};