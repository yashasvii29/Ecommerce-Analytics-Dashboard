const express = require('express');
const router = express.Router();


const { getAllCustomers, getCustomerById, getCustomersByLocation } = require('../controllers/customerController');

// Route to get all customers
router.get('/allCustomers', getAllCustomers);

// Route to get customer by ID
router.get('/customers/:id', getCustomerById);

// Route to get customers by location
router.get('/customers/location/:location', getCustomersByLocation);

module.exports = router;