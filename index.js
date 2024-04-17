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
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/product',(req,res)=>{
    res.render('product');
})
app.get('/customer',(req,res)=>{
    res.render('customer');
})
app.get('/order',(req,res)=>{
    res.render('order');
})
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const Orders = require('./models/Order');

app.use(orderRoutes);
app.use(productRoutes);
app.use(customerRoutes);


const data = require('./seed/dataSeed');
const dataGen = require('./public/js/dataGenerator');


const port = 8080;

app.listen(port,()=>{
    console.log(`server connected at port ${port}`);
})




