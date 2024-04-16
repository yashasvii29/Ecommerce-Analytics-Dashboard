const express = require('express');
const router = express.Router();


const { getAllCustomers, getCustomerById, getCustomersByLocation } = require('../controllers/customerController');

// Route to get all customers
router.get('/allCustomers', getAllCustomers);

// // // Route to get customer by ID
// // router.get('/:customerId', getCustomerById);

// // // Route to get customers by location
// // router.get('/location/:location', getCustomersByLocation);

module.exports = router;