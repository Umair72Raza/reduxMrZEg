const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.URL;

mongoose.connect(URL,{
    useNewUrlParser : true,
    useUnifiedTopology: true

}).then(()=>{
    console.log("Customer Database Connected")
})

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Connection failed"));

module.exports = mongoose