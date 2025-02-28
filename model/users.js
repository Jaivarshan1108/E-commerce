// creating a schema for  users
const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name :{
        type : String,
        require : true,
    },
    email :{
        type : String,
        require : true,
        unique :true,
    },
    password :{
        type : String,
        require : true,
    },
    role :{
        type : String,
        enum :['customer','admin'],
        default :'customer',
    }

});

module.exports = mongoose.model('users',userschema);