// routes/coupon.route.js

/**
 * @swagger
 * tags:
 *   name: Coupon
 *   description: Coupon endpoints
 */

/**
 * @swagger
 * /api/coupon:
 *   get:
 *     summary: Get all Coupons
 *     description: Get all Coupon endpoint
 *     tags: [Coupon]
 *     responses:
 *       '200':
 *         description: Coupon successfully
 *         content:
 *           application/json:
 *               
 *       '400':
 *         description: Coupon endpoint failed
 *              
 *                 
 */

/**
 * @swagger
 * /api/coupon:
 *   post:
 *     summary: Apply a coupon to the cart
 *     description: Apply a coupon code to the user's shopping cart and get the adjusted price and discount amount.
 *     tags: [Coupon]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               couponCode:
 *                 type: string
 *             example:
 *               couponCode: MIXED10
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               adjustedPrice: 1000.00
 *               discount: 200.00
 *               message: Coupon applied successfully
 *       '400':
 *         description: Invalid coupon or conditions not met
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid coupon or conditions not met
 *       '404':
 *         description: Coupon not found
 *         content:
 *           application/json:
 *             example:
 *               message: Coupon not found
 */

const express = require('express');
const router = express.Router();
const CouponController = require("../controllers/coupon.controller.js");


const couponController = new CouponController();
router.post('/', couponController.addCoupon);
router.get('/', couponController.getAllCoupon);



module.exports = router;