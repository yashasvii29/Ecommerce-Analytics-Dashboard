
const express = require('express');
const router = express.Router();

// Sample controller functions for products
const { getAllProducts, getProductById} = require('../controllers/productController');

// Route to get all products
router.get('/allProducts', getAllProducts);

// Route to get product by ID
router.get('/products/:id', getProductById);

// Route to get products by category
// router.get('/products/category/:category', getProductsByCategory);

module.exports = router;
