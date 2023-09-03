const { sequelize, Item, Cart, CartItem, Coupon } = require('./models');

const seedDatabase = async () => {
  try {
    // Sync the database to create tables
    await sequelize.sync({ force: true });

    // Create sample items (10 items)
    const items = await Item.bulkCreate([
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
    ]);

    // Create sample coupons
    const coupons = await Coupon.bulkCreate([
      { code: 'FIXED10' },
      { code: 'PERCENT10' },
      { code: 'MIXED10' },
      { code: 'REJECTED10' },
    ]);

    // Create a sample cart
    const cart = await Cart.create({ userId: 1 });

    // Add items to the cart (4 cart items)
    await CartItem.bulkCreate([
      { cartId: cart.id, itemId: items[0].id, quantity: 2 },
      { cartId: cart.id, itemId: items[1].id, quantity: 1 },
      { cartId: cart.id, itemId: items[3].id, quantity: 1 },
      { cartId: cart.id, itemId: items[8].id, quantity: 2 },
    ]);
    console.log('Sample data uploaded to the database.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
};

seedDatabase();
