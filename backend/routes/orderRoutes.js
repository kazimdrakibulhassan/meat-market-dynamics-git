const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
// Get all orders
router.get('/', orderController.getAllOrders);

// Get order by ID
router.get('/:id', orderController.getOrderById);

// Create new order
router.post('/', orderController.createOrder);

// Update order
router.put('/:order_ID', orderController.updateOrder);

// Delete order
router.delete('/:order_ID', orderController.deleteOrder);

// Get orders by delivery
router.get('/delivery/:delivery_ID', orderController.getOrdersByDelivery);

module.exports = router;