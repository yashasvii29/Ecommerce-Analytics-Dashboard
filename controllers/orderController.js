const Order = require("../models/Order");
const Product = require('../models/Product');
getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    const products = await Product.find();

    // Calculate total revenue
    let totalRevenue = 0;
    orders.forEach((order) => {
      if (order.totalAmount) {
        totalRevenue += order.totalAmount;
      }
    });

    //total  paid amount
    const cancelledOrders = await Order.find({ orderStatus: "cancel" });
    let totalCancelledAmount = 0;
    cancelledOrders.forEach((order) => {
      totalCancelledAmount += order.totalAmount;
    });
    let totalPaidOrders = totalRevenue - totalCancelledAmount;

    //average Order Value
    const numOfOrders = orders.length;
    const avgOrderValue = (totalPaidOrders / numOfOrders || 0).toFixed(2);

    //profit/loss
    let totalCostPrice = 0;
    let totalDiscount=0;
    products.forEach((product) => {
      if (product.costPrice) {
        totalCostPrice += product.costPrice*product.quantity;
        totalDiscount += product.originalPrice*product.quantity;
      }
    });
    const profitLoss = (((totalRevenue - totalCostPrice)/totalCostPrice)*100).toFixed(2);

    //discounts
    const totalDiscountCal = (((totalRevenue-totalDiscount)/totalRevenue)*100).toFixed(2);
    const totalDiscountApplied = totalDiscountCal > 0 ? totalDiscountCal :0;
    

    res.render("order", {
      // orders: orders,
      totalRevenue: totalRevenue,
      totalPaidOrders: totalPaidOrders,
      profitLoss:profitLoss,
      avgOrderValue:avgOrderValue,
      totalDiscountApplied:totalDiscountApplied,
      refundedAmount:totalCancelledAmount
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {getOrders};