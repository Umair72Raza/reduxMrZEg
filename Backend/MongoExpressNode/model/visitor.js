const mongoose = require('mongoose');

const visitor = new mongoose.Schema({
    visitorName:{
        type:String,
        required: true
    },

})





const Visitor = mongoose.model("Visitor", visitor);
module.exports = Visitor;