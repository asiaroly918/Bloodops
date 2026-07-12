const mongoose = require("mongoose");


const fundingSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    amount:{
        type:Number,
        required:true
    },

    paymentIntentId:{
        type:String,
        required:true
    }

},
{
    timestamps:true
}
);


module.exports = mongoose.model(
    "Funding",
    fundingSchema
);