const express = require('express');
const Order = require('../models/Order');
const Customer = require('../models/Customer');
const Chance = require('chance');

// Function to get all orders
const getAllOrders = async(req, res) => {
 
    try{
        const chance = new Chance();

    

        // Function to generate random order data
        function generateRandomOrder() {
          // Generate random customer details
          const customerName = chance.name();
          const customerEmail = chance.email();
          const customerID = chance.guid();
          const customerAddress = {
            street: chance.address(),
              city: chance.city(),
              state: chance.state(),
              country: chance.country(),
              zipCode: chance.zip(),
          }
          
    
          // Generate random product details
          const productName = chance.word();
          const productPrice = chance.integer({ min: 10, max: 100 });
          const productQuantity = chance.integer({ min: 1, max: 10 });
        
          // Calculate total amount
          const totalAmount = productPrice * productQuantity;
        
          // Generate random order date
          const orderDate = chance.date();
        
          // Generate random order number
          const orderId = chance.guid();
        // const orderId = _id;
        
          // Generate random order status
          const orderStatusOptions = ['pending', 'processing', 'shipped', 'delivered','cancel'];
          const orderStatus = chance.pickone(orderStatusOptions);
        
        
          const hasVisitedWebsite = chance.bool(); // Simulate whether a visitor has visited the website
          const hasAddedToCart = chance.bool(); // Simulate whether a visitor has added items to their cart
        
        
          // Construct order object
          const order = {
            orderId,
            customer: {
              cusID: customerID,
              name: customerName,
              email: customerEmail,
              addresss: customerAddress.street +  ', ' + customerAddress.city + ', '+ customerAddress.state +', '+customerAddress.zipCode+', '+customerAddress.country
            },
            product: {
              name: productName,
              price: productPrice,
              quantity: productQuantity,
            },
            totalAmount,
            orderDate,
            orderStatus,
            hasVisitedWebsite,
            hasAddedToCart
          };
        
          return order;
        }
        
        const orders = [];
          
    
        // Generate multiple random orders
        function generateRandomOrders(count) {
          for (let i = 0; i < count; i++) {
            const order = generateRandomOrder();
            orders.push(order);
            
          }
          return orders;
        }
            // Example: Generate 5 random orders
            const randomOrders = generateRandomOrders(5);
            await Order.insertMany(randomOrders);
            // console.log('Orders added successfully');
            const allOrders =  await Order.find({});
            res.send(allOrders);
            // res.send(randomOrders); // it will show only new orders
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
    
};


const getOrderById = async(req,res)=>{
    const {id} = req.params; // is m uss order ki _id aayegi
    try{
        // Logic to fetch order by ID from the database
        const order  = await Order.findById(id);
        console.log(req.params);
        if(!order){
            return res.status(400).json({msg:'Order not found'});
        }
        res.send(order);
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
  }
    }

    // Fetch orders within a specific date range
    const getOrdersByDateRange = async(req,res)=>{
        const { startDate, endDate } = req.query;
        console.log(req.query);
  
        try {
          const orders = await Order.find({
            createdAt: {
              $gte: new Date(startDate),
              $lte: new Date(endDate),
            },
          });
          res.send(orders);
        } catch (err) {
          console.log(err.message);
          res.status(500).json({ msg: 'Server error' });
        }
    }

    // http://localhost:8080/api/orders/date-range?startDate=2022-01-01&endDate=2022-12-31.
  

module.exports = {getAllOrders,getOrderById,getOrdersByDateRange};