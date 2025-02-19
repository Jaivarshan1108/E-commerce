const mongoose = require('mongoose');

const connectdb = async() =>{
    try{
        mongoose.connect("mongodb://localhost:27017/onlineShopping");
        console.log("DB connected  :) ");
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectdb;
