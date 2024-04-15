const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    cusID:{
        type:String,
        requires:true
    },
    name : {
        type:String , 
        requires:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        street:String,
        city:String,
        state:String,
        country:String,
        zipcode:Number
    }
});

const Customer = mongoose.model( 'Customer' , customerSchema);
module.exports=Customer;