const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/AmatShop')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log(err);
})

const ejsMate=require('ejs-mate');
const methodOverride =require('method-override');
app.engine('ejs',ejsMate);
app.set('view engine','ejs'); 
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));  
app.use(methodOverride('_method'));

// app.get('/',(req,res)=>{
//     res.status(200).json({msg:'Ecommerce Analytics Dashboard'});
// })


const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const Order = require('./models/Order');

app.use(orderRoutes);
app.use(productRoutes);
app.use(customerRoutes);
app.use(dashboardRoutes);


const data = require('./seed/dataSeed');
// data
const dataGen = require('./public/js/dataGenerator');

// Simulated data generation
// let netProfit = 1000;
// setInterval(() => {
//     netProfit += Math.floor(Math.random() * 1000); // Random increment
// }, 5000); // Increment profit every 2 seconds

// app.get('/profit', (req, res) => {
//     res.json({ profit: netProfit });
// });


// Initialize monthly profits array with zeros for each month
let monthlyProfits = Array(12).fill(0);

// Update monthly profits randomly every 2 seconds
setInterval(() => {
    monthlyProfits = monthlyProfits.map(profit => profit + Math.floor(Math.random() * 1000));
}, 4000);

// Endpoint to get monthly profit data
app.get('/profit/all', (req, res) => {
    res.json({ profit: monthlyProfits });
});


// Generate dummy data for sales and orders
function generateDummyData() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const salesData = [];
    const orderData = [];

    for (let i = 0; i < months.length; i++) {
        // Generate random sales amount (between 1000 and 5000)
        const salesAmount = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

        // Generate random number of orders (between 50 and 200)
        const orderQuantity = Math.floor(Math.random() * (200 - 50 + 1)) + 50;

        salesData.push({ month: months[i], amount: salesAmount });
        orderData.push({ month: months[i], quantity: orderQuantity });
    }

    return { sales: salesData, orders: orderData };
}

// Example usage
const { sales, orders } = generateDummyData();


app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/products',(req,res)=>{
    res.render('product');
})
app.get('/customers',(req,res)=>{
    res.render('customer');
})
app.get('/orders',(req,res)=>{
    res.render('order');
})

app.get('/net',(req,res)=>{
    res.render('profit');
})

app.get('/sales',(req,res)=>{
    res.render('sales');
})
const port = 8080;

app.listen(port,()=>{
    console.log(`server connected at port ${port}`);
})




