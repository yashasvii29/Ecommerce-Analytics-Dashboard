const Product = require("../models/Product");
const Order = require("../models/Order");

getProducts = async (req, res, next) => {
  try {
    const orders = await Order.find();
    const products = await Product.find();

    //total Revenue
    let totalRevenue = 0;
    orders.forEach((order) => {
      if (order.totalAmount) {
        totalRevenue += order.totalAmount;
      }
    });

    //total quantity sold 
    let totalQuantity = 0;
    products.forEach((product)=>{
      totalQuantity += product.quantity;
    });

    //unique products
    const uniqueProducts = {};
    products.forEach((product) => {
      if (!uniqueProducts[product.orderNumber]) {
        uniqueProducts[product.orderNumber] = true;
      }
    });
    const numberOfUniqueProducts = Object.keys(uniqueProducts).length;

    //avg. product price
    let totalProductPrice = 0;
    let numberOFProducts = 0 ;
    products.forEach((product)=>{
      totalProductPrice += product.price;
      numberOFProducts += 1;
    }); 
    const avgProductPrice = (totalProductPrice/numberOFProducts).toFixed(2);

    //markup Price
    let mp =0 , cp =0;
    products.forEach((product)=>{
      cp += product.costPrice;
      let diff = product.price - product.costPrice;
      mp += diff;
    });
    const markUpPercentage = ((mp/cp)*100).toFixed(2);

    //gross profit margin
    let grossProfitMargin = ((totalRevenue-cp)/totalRevenue*100).toFixed(2);


    res.render('product',{
        totalRevenue:totalRevenue,
        totalQuantity:totalQuantity,
        numberOfUniqueProducts:numberOfUniqueProducts,
        avgProductPrice:avgProductPrice,
        markUpPercentage:markUpPercentage,
        grossProfitMargin:grossProfitMargin
    })
  } catch (error) {
    next(error);
  }
};
module.exports={getProducts};