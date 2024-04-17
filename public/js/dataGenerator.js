const Chance = require('chance');
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
  const orderNumber = chance.guid();

  // Generate random order status
  const orderStatusOptions = ['pending', 'processing', 'shipped', 'delivered','cancel'];
  const orderStatus = chance.pickone(orderStatusOptions);


  const hasVisitedWebsite = chance.bool(); // Simulate whether a visitor has visited the website
  const hasAddedToCart = chance.bool(); // Simulate whether a visitor has added items to their cart


  // Construct order object
  const order = {
    orderNumber,
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


// Analyze the generated data
// const totalVisits = orders.filter(order => order.visitedWebsite).length;
// const initiatedCarts = orders.filter(order => order.addedToCart).length;
// const completedOrders = orders.filter(order => order.completedOrder).length;
// const abandonedCarts = initiatedCarts - completedOrders;

// Calculate conversion rate and cart abandonment rate
// const conversionRate = (completedOrders / totalVisits) * 100;
// const abandonmentRate = (abandonedCarts / initiatedCarts) * 100;


// Example: Generate 4 random orders
const randomOrders = generateRandomOrders(1);
console.log(randomOrders);

module.exports={generateRandomOrder,generateRandomOrders,randomOrders};