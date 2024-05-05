const mongoose = require("mongoose");

const dataGenerated = require("../public/js/dataGenerator");

let orders = dataGenerated.randomOrders;

const Customer = require("../models/Customer");

function saveCustomers(orders) {
  orders.forEach((order) => {
    const customerData = order.customer;
    const on = order;
    const customer = new Customer({
      orderNumber: on.orderNumber,
      cusID: customerData.cusID,
      name: customerData.name,
      email: customerData.email,
      addresss: customerData.addresss,
    });
    customer
    .save()
    .then((savedCustomer) => {
        console.log("customers data saved sucessfully");
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

saveCustomers(orders);

const Product = require("../models/Product");

function saveProducts(orders) {
  orders.forEach((order) => {
    const productData = order.product;
    const on = order;
    const product = new Product({
      orderNumber: on.orderNumber,
      name: productData.name,
      price: productData.price,
      quantity: productData.quantity,
      rating: productData.rating,
      category: productData.category,
      originalPrice: productData.originalPrice,
      costPrice: productData.costPrice,
    });

    product
      .save()
      .then((savedProducts) => {
        console.log("products data saved sucessfully");
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

saveProducts(orders);

const Order = require("../models/Order");

function saveOrders(orders) {
  orders.forEach((order) => {
    const orderData = order;
    const orderDetail = new Order({
      orderNumber: orderData.orderNumber,
      totalAmount: orderData.totalAmount,
      orderDate: orderData.orderDate,
      orderStatus: orderData.orderStatus,
      hasVisitedWebsite: orderData.hasVisitedWebsite,
      hasAddedToCart: orderData.hasAddedToCart,
      mode:orderData.mode
    });

    orderDetail
      .save()
      .then((savedOrders) => {
        console.log("orders data saved sucessfully");
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

saveOrders(orders);


