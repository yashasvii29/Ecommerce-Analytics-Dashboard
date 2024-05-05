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
    category:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        required:true 
    },
    originalPrice:{
        type:Number,
        required:true
    },
    costPrice:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        requires:true
    },
    rating:{
        type:Number,
        require:true
    }
},{collection:'products'});


const Product = mongoose.model( 'Product',productSchema ,'products');
module.exports=Product;