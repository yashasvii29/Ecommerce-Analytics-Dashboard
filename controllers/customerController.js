const Order = require("../models/Order");
const Customer = require('../models/Customer');

getCustomers = async (req, res, next) => {
  try {
    let customers = await Customer.find();
    const orders = await Order.find();
    let totalRevenue = 0;
    orders.forEach((order) => {
      if (order.totalAmount) {
        totalRevenue += order.totalAmount;
      }
    });

    // Calculate number of unique customers
    const uniqueCustomers = {};
    customers.forEach((customer) => {
      if (!uniqueCustomers[customer.orderNumber]) {
        uniqueCustomers[customer.orderNumber] = true;
      }
    });
    const numberOfCustomers = Object.keys(uniqueCustomers).length;

    //cancellation rate
    let cancelled = await Order.find({orderStatus:'cancel'});
    const cancellationRate = ((cancelled.length/numberOfCustomers)*100).toFixed(2);
    
    // Count the number of distinct customers
    const distinctCustomers = new Set(customers.map(customer => customer.cusID));

    // Count the number of customers making repeat purchases
    let repeatCustomers = 0;
    distinctCustomers.forEach(cusID => {
      const customerOrders = customers.filter(customer => customer.cusID === cusID);
      if (customerOrders.length > 1) { // Check if the customer has made more than one purchase
        repeatCustomers++;
      }
    });

    // Calculate repeat purchase rate
    const totalCustomers = distinctCustomers.size;
    const repeatPurchaseRate = ((repeatCustomers / totalCustomers) * 100).toFixed(2);

    //abandoned carts
    let abandonedCarts = 0;
    orders.forEach((order)=>{
      if(order.hasVisitedWebsite == true && order.
        hasAddedToCart == false){
          abandonedCarts += 1;
        }
    });

    res.render("customer", {
      totalRevenue: totalRevenue,
      numberOfCustomers:numberOfCustomers,
      cancellationRate:cancellationRate,
      repeatPurchaseRate:repeatPurchaseRate,
      abandonedCarts:abandonedCarts
    });
  } catch (error) {
    next(error);
  }
};
module.exports={getCustomers};