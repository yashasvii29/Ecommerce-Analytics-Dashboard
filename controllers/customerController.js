const express = require('express');
const Customer = require('../models/Customer');
// const Chance = require('chance');
// Function to get all customers
const getAllCustomers = async(req, res) => {
   
    
    try{
    //     const chance = new Chance();

    //     function generateRandomCustomer(){
    //         const customerName = chance.name();
    //         const customerEmail = chance.email();
    //         const customerID = chance.guid();
    //         const customerAddress = {
    //           street: chance.address(),
    //             city: chance.city(),
    //             state: chance.state(),
    //             country: chance.country(),
    //             zipCode: chance.zip(),
    //         }
           
    //         const customer = {
    //           customerName,
    //           customerEmail,
    //           customerID,
    //           customerAddress
    //         };
           
    //         return customer;
    //     }
    //     const customers=[];
    //     function generateRandomCustomers(count){
    //         for (let i = 0; i < count; i++) {
    //             const customer = generateRandomCustomer();
    //             customers.push(customer);
    //           }
    //           return customers;
    //     }
    //     const randomCustomers = generateRandomCustomers(5);
        // await Customer.insertMany(randomCustomers);
        const allCustomers = await Customer.find({});
        res.send(allCustomers);

}       
    
    catch(err){
        console.log(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
    
};

// Function to get customer by ID
const getCustomerById = async(req, res) => {
    try{
        // Logic to fetch customer by ID from the database
        const {id} = req.params; // is m uss order ki _id aayegi
        const customer  = await Customer.findById(id);
        // console.log(req.params);
        if(!customer){
            return res.status(400).json({msg:'Customer not found'});
        }
        res.send(customer);
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
  }
};

// Function to get customers by location
const getCustomersByLocation = async(req, res) => {
    try {
        const {location} = req.params;
    
        const customers = await Customer.find({
            "customerAddress.city": location // Query based on the city field within customerAddress
        });
        if(!customers){
            return res.status(400).json({msg:'Customer not found with this location'});
        }
        console.log(customers);
        res.send(customers);
      } 
      catch (err) {
        console.log(err.message);
        res.status(500).json({ msg: 'Server error' });
      }
    // Logic to fetch customers by location from the database
};

module.exports = { getAllCustomers,getCustomerById,getCustomersByLocation };