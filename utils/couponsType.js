// Define an object that maps coupon types to their conditions and discounts
const couponTypes = {
    FIXED10: {
      greaterThanPrice: 50,
      minItemCount: 1,
      discountType: 'fixed',
      discountAmount: 10,
    },
    PERCENT10: {
      greaterThanPrice: 100,
      minItemCount: 2,
      discountType: 'percent',
      discountAmount: 10,
    },
    MIXED10: {
      greaterThanPrice: 200,
      minItemCount: 3,
      discountType: 'mixed',
      discountAmount: 10,
    },
    REJECTED10: {
      greaterThanPrice: 1000,
      minItemCount: 1,
      discountType: 'both',
      discountAmount: 0,
      fixedDiscount: 10,
      percentDiscount: 10,
    },
    // Add other coupon types here
  };
  
  module.exports = couponTypes;
  