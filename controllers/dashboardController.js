const Customer = require('../models/Customer');
const Order = require('../models/Order');
exports.renderDashboard = async(req, res, next) => {
    let customers = await Customer.find();
    let orders = await Order.find();

  // Calculate number of unique customers
  const uniqueCustomers = {};
  customers.forEach((customer) => {
    if (!uniqueCustomers[customer.orderNumber]) {
      uniqueCustomers[customer.orderNumber] = true;
    }
  });
  const numberOfCustomers = Object.keys(uniqueCustomers).length;

  //cancelled orders
  let cancelled = await Order.find({orderStatus:'cancel'});
  const cancelledNumber = cancelled.length;

  //abandoned carts
  let abandonedCarts = 0;
  orders.forEach((order)=>{
    if(order.hasVisitedWebsite == true && order.
      hasAddedToCart == false){
        abandonedCarts += 1;
      }
  });

  let abandonedOrders = 0 ; 
  let totalRevenue = 0;
  orders.forEach((order)=> {
    if (order.totalAmount) {
        totalRevenue += order.totalAmount;
      }
    if(order.orderStatus == 'abandoned'){
        abandonedOrders += order.totalAmount
    }
  });
  const abandonedOrdersAmount = totalRevenue - abandonedOrders;

  res.render('index',{
    numberOfCustomers:numberOfCustomers,
    cancelledNumber:cancelledNumber,
    abandonedCarts:abandonedCarts,
    abandonedOrdersAmount:abandonedOrdersAmount
  })
};
// module.exports = {renderDashboard};