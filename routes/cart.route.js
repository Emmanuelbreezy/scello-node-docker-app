// routes/cart.route.js

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart endpoints
 */

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Get the user's cart
 *     description: Retrieve the user's shopping cart.
 *     tags: [Cart]
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               totalPrice: $1,200.00
 *               cartItems:
 *                 - itemId: 1
 *                   quantity: 2
 *                   item:
 *                     id: 1
 *                     name: Laptop
 *                     price: 799.99
 *                 - itemId: 2
 *                   quantity: 3
 *                   item:
 *                     id: 2
 *                     name: Smartphone
 *                     price: 499.99
 *               message: Cart retrieved successfully
 *       '404':
 *         description: Cart not found
 *         content:
 *           application/json:
 *             example:
 *               message: Cart not found
 */



const express = require('express');
const router = express.Router();
const CartController = require("../controllers/cart.controller.js");


const cartController = new CartController();
router.get('/', cartController.getAllCart);


module.exports = router;