const express = require('express');
const Product = require('../models/Product');
const Chance = require('chance');

// Function to get all products
const getAllProducts =async (req, res) => {
    try{
        const allproducts =  await Product.find({});
            res.send(allproducts);
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
   
};

// Function to get product by ID
const getProductById = async(req, res) => {
    try{
        // Logic to fetch Product by ID from the database
        const {id} = req.params; // is m uss Product ki _id aayegi
        const product  = await Product.findById(id);
        console.log(req.params);
        if(!product){
            return res.status(400).json({msg:'Product not found'});
        }
        res.send(product);
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
  }
};

// Function to get products by category
// const getProductsByCategory = async(req, res) => {
//     try {
//         const {category} = req.params;
    
//         const products = await Product.find({
//             "ProductAddress.city": category // Query based on the city field within ProductAddress
//         });
//         if(!products){
//             return res.status(400).json({msg:'Product not found with this category'});
//         }
//         console.log(products);
//         res.send(products);
//       } 
//       catch (err) {
//         console.log(err.message);
//         res.status(500).json({ msg: 'Server error' });
//       }
//     // Logic to fetch products by category from the database
// };

module.exports = { getAllProducts, getProductById };