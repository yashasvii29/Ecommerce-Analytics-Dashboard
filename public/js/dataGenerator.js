const Chance = require("chance");
const chance = new Chance();

function generateRandomOrder() {
  // random customer details
  const customerName = chance.name();
  const customerEmail = chance.email();
  const customerID = chance.guid();
  const customerAddress = {
    street: chance.address(),
    city: chance.city(),
    state: chance.state(),
    country: chance.country(),
    zipCode: chance.zip(),
  };

  //  random product details
  const productName = chance.word();
  const productPrice = chance.integer({ min: 10, max: 100 });
  const productQuantity = chance.integer({ min: 1, max: 10 });
  const costPrice = chance.integer({ min: 5, max: 80 });
  const originalPrice = chance.integer({ min: 10, max: 120 });
  const productsTypes = [
    "clothing",
    "electronics",
    "food",
    "book",
    "stationery",
  ];
  const productCategory = chance.pickone(productsTypes);
  const ratingRange = [1, 2, 3, 4, 5];
  const productRating = chance.pickone(ratingRange);

  // Calculate total amount
  const totalAmount = productPrice * productQuantity;

  // random order date
  const orderDate = chance.date();

  // random order number
  const orderNumber = chance.guid();

  // random order status
  const orderStatusOptions = [
    "pending",
    "processing",
    "shipped",
    "delivered",
    "cancel",
    "abandoned"
  ];
  const orderStatus = chance.pickone(orderStatusOptions);

  const hasVisitedWebsite = chance.bool();
  const hasAddedToCart = chance.bool();

  const modeofOrders = ['online','offline'];
  const mode = chance.pickone(modeofOrders);

  const order = {
    orderNumber,
    customer: {
      cusID: customerID,
      name: customerName,
      email: customerEmail,
      addresss:
        customerAddress.street +
        ", " +
        customerAddress.city +
        ", " +
        customerAddress.state +
        ", " +
        customerAddress.zipCode +
        ", " +
        customerAddress.country,
    },
    product: {
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      category: productCategory,
      rating: productRating,
      costPrice: costPrice,
      originalPrice: originalPrice,
    },
    totalAmount,
    orderDate,
    orderStatus,
    hasVisitedWebsite,
    hasAddedToCart,
    mode
  };

  return order;
}

const orders = [];
function generateRandomOrders(count) {
  for (let i = 0; i < count; i++) {
    const order = generateRandomOrder();
    orders.push(order);
  }
  return orders;
}

const randomOrders = generateRandomOrders(1);

module.exports = { generateRandomOrder, generateRandomOrders, randomOrders };
