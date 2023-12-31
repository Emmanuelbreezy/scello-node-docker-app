'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartItem.belongsTo(models.Cart, {
        foreignKey: 'cartId',
        onDelete: 'CASCADE',
      });

      CartItem.belongsTo(models.Item, {
        foreignKey: 'itemId',
        as: 'item'
      });
    }
  }
  CartItem.init({
    itemId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};