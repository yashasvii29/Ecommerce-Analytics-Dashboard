const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderNumber:{
        type:String,
        require:true
    },
    totalAmount:{
        type:Number,
        required:true
    },
    orderDate:{
        type:Date,
        required:true
    },
    orderStatus:{
        type:String,
        required:true
    },
    hasVisitedWebsite:{
        type:Boolean,
        require:true
    },
    hasAddedToCart:{
        type:Boolean,
        require:true
    },
    mode:{
        type:String,
        required:true
    }
},{collections:'orders'});

const Orders = mongoose.model( 'Orders',orderSchema);
module.exports= Orders;