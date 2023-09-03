const asyncHandler = require('express-async-handler');
const { Cart,CartItem,Item } = require('../models');
const formatCurrency = require('../utils/formatCurrency');


class CartController {

    getAllCart = asyncHandler(async (req, res) => {
          try{
            const cart = await Cart.findOne({
              where: { userId: 1 },
              include: [
                {
                  model: CartItem,
                  as: 'cartItems', 
                  include: [
                    {
                      model: Item,
                      as: 'item',
                    },
                  ],
                },
              ],
            });
        
            if (!cart) {
              return res.status(404).json({ message: 'Cart not found' });
            }

            const cartItems = cart.cartItems;
            const totalPrice = cartItems.reduce((acc, cartItem) => {
              return acc + parseFloat(cartItem.item.price) * cartItem.quantity;
            }, 0);

            const result = cartItems.map((cartItem) =>({
                id: cartItem.id,
                itemId: cartItem.item.id,
                quantity: cartItem.quantity,
                item: cartItem.item
            }))

          const formatTotalPrice = formatCurrency(totalPrice.toFixed(2),'USD')

            res.json({
              message:"Cart fetched successfully",
              cartItems: result,
              totalPrice: formatTotalPrice,

            });
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
          }
    });
}

module.exports =  CartController;