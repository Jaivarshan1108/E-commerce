const mongoose = require('mongoose');

const orderschema  = new mongoose.Schema({
    userid :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        require : type,
    },
    items :[
        {
            product_id :{
                type : mongoose.Schema.Types.ObjectId,
                ref : 'product',
                required : true,
            },
            quantity :{
                type : Number,
                require : true,
                min : 1,
            }
        }
    ],
    total_price :{
        type : Number,
        required : true,
    },
    Status :{
        type : String,
        enum :['pending','shipped','delivered','cancelled'],
        default :'pending',
    },
});

module.exports = mongoose.model('order',orderschema);