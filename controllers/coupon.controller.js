const asyncHandler = require('express-async-handler');
const { Coupon,Cart,CartItem, Item } = require('../models');
const couponTypes = require('../utils/couponsType');



class CouponController {

    addCoupon = asyncHandler(async (req, res) => {
        const { couponCode } = req.body;
        try{
              const coupon = await Coupon.findOne({ where: { code: couponCode } });

              if (!coupon) {
                  return res.status(404).json({ error: 'Coupon not found' });
              }

              // Check if the coupon code is a valid type
              if (!couponTypes[coupon.code]) {
                  return res.status(400).json({ error: 'Invalid coupon type' });
              }

              const couponConfig = couponTypes[coupon.code];
              const {cartTotal, itemCount} = await this.calculateCartTotalAndItems({userId:1}); // to fetch the carttotal & ItemsCount
              if (cartTotal >= couponConfig.greaterThanPrice && itemCount >= couponConfig.minItemCount) {
                let discount = 0;
                 // Calculate the discount based on the discount type
                if (couponConfig.discountType === 'fixed') {
                  discount = couponConfig.discountAmount;
                } else if (couponConfig.discountType === 'percent') {
                  discount = (couponConfig.discountAmount / 100) * cartTotal;
                } else if (couponConfig.discountType === 'mixed') {
                  discount = Math.max(couponConfig.discountAmount, (couponConfig.discountAmount / 100) * cartTotal);
                } else if (couponConfig.discountType === 'both') {
                  const fixedDiscount = couponConfig.fixedDiscount;
                  const percentDiscount = (couponConfig.percentDiscount / 100) * cartTotal;
                  discount = fixedDiscount + percentDiscount;
                }
                const adjustedPrice = cartTotal - discount;
                const roundedAdjustedPrice = adjustedPrice.toFixed(2);

                return res.json({
                  message:"Coupon added successfully",
                  adjustedPrice: parseFloat(roundedAdjustedPrice), 
                  discount 
                });
              }else{
                return res.status(400).json({ 
                  message:"Coupon conditions not met",
                });
            }

          }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
          }
    });

    getAllCoupon = asyncHandler(async (req, res) => {
      try{
          const coupons = await Coupon.findAll();
          res.json({
            data:coupons
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
    });
    

    //Helper function
    calculateCartTotalAndItems = async ({ userId }) => {
      try {
        const cart = await Cart.findOne({
          where: { userId },
          include: [
            {model: CartItem,as: 'cartItems',
            include: [{model: Item, as: 'item',},],
           },
          ],});
    
        if (!cart) return {cartTotal: 0,itemCount: 0,};
        // Calculate the total price of items in the cart
        const totalPrice = cart.cartItems.reduce((acc, cartItem) => {
          return acc + parseFloat(cartItem.item.price) * cartItem.quantity;
        }, 0);
    
        // Calculate the total number of items in the cart
        // const itemCount = cart.cartItems.reduce((acc, cartItem) => {
        //   return acc + cartItem.quantity;
        // }, 0);
        const itemCount = cart.cartItems.length;
    
        return {
          cartTotal: totalPrice.toFixed(2),
          itemCount,
        };
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    
}

module.exports =  CouponController;
