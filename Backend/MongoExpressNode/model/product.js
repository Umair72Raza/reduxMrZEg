const mongoose = require('mongoose');

const product = new mongoose.Schema({
    visitorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Visitor",
        required: true
    },
    productName:{
        type: String,
        required: true
    },

})

const Product = mongoose.model("Product",product);
module.exports = Product;