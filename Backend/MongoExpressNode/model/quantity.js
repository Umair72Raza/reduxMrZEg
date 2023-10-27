const mongoose = require('mongoose');

const quantity = new mongoose.Schema({
    visitorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Visitor",
        required: true
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    value:{
        type: Number,
        required: true
    }

})

const Quantity = mongoose.model("Quantity", quantity);
module.exports = Quantity;