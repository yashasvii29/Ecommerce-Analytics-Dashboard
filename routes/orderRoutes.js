// // orderRoutes.js

// const express = require('express');
// const router = express.Router();

// // Sample controller functions
// const { getAllOrders, getOrderById, getOrdersByDateRange } = require('../controllers/orderController');

// // Route to get all orders
// router.get('/allOrders', getAllOrders);

// // Route to get order by ID
// router.get('/orders/:id', getOrderById);

// // Route to get orders within a specific date range
// router.get('/orders/date-range', getOrdersByDateRange);

// module.exports = router;



const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.get('/order',orderController.getOrders);

module.exports = router;


