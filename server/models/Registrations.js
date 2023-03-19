const mongoose = require('mongoose');

const reqSchema = mongoose.Schema({
    Customer_Name:{
        type:String,
        required:true
    },
    NIC_No:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Mobile_No:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Registration', reqSchema);
