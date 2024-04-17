const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    orderNumber:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        required:true 
    },
    quantity:{
        type:Number,
        requires:true
    }
},{collection:'products'});


const Product = mongoose.model( 'Product',productSchema ,'products');
module.exports=Product;