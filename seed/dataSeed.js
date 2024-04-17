const mongoose = require("mongoose");
const Customer = require("../models/Customer");
const dataGenerated = require("../public/js/dataGenerator");

let orders = dataGenerated.randomOrders;
console.log("dataSeed : ",orders);

function saveCustomers(orders) {
  orders.forEach((order, index) => {
    const customerData = order.customer;
    const customer = new Customer({
      cusId: customerData.cusId,
      name: customerData.name,
      email: customerData.email,
      address: customerData.address,
    });

    customer
      .save()
      .then((savedCustomer) => {
        console.log(savedCustomer);
      })
      // console.error(`Error saving customer ${index + 1}/${orders.length}:`, error);


  });
}
saveCustomers(orders);
const Product = require('../models/Product');

function saveProducts(orders) {
    orders.forEach((order) => {
      const productData = order.product;
      const product = new Product({
        name: productData.name,
        price: productData.price,
        quantity: productData.quantity,
      });
  
      product
        .save()
        .then((savedProducts) => {
          console.log(savedProducts);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
  
  saveProducts(orders);

const  Order = require("../models/Order");

function saveOrders(orders) {
    orders.forEach((order) => {
      const orderData = order;
      const orderDetail = new Order({
        orderNumber : orderData.orderNumber,
        totalAmount : orderData.totalAmount,
        orderDate: orderData.orderDate ,
        orderStatus:orderData.orderStatus,
        hasVisitedWebsite:orderData.hasVisitedWebsite,
        hasAddedToCart:orderData.hasAddedToCart
      });
  
      orderDetail
        .save()
        .then((savedOrders) => {
          console.log(savedOrders);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
  
  saveOrders(orders);