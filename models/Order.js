const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId:{
        type:String,
        require:true
    },
    // cusID:{
    //     type:String,
    //     trquired:true
    // },
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
    }
});

const Orders = mongoose.model( 'Orders',orderSchema);
module.exports= Orders;