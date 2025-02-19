const mongoose = require('mongoose');

const productschema  = new mongoose.Schema({
    name:{
        type : String,
        require : true,
    },
    description :{
        type : String,
    },
    price :{
        type : Number,
        require : true,
    },
    category :{
        type : String,
        require : true,
    },
    size :{
        type : Number,
        require : true,
    },
    image :{
        type : String,
        require : true,
    },

});

module.exports = mongoose.model('product', productschema);
