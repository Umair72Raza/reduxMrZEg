const express = require('express');
const app = express();
let cors = require ('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('./config/connection');


const visitorRouter = require('./routes/visitor');
const prodcutRouter = require('./routes/product');
const quantityRouter = require('./routes/quantity')


const PORT = process.env.PORT || 8000;
app.use(cors())
dotenv.config();
app.use(bodyParser.json());
app.use(express.static('Public'));



app.use('/visitor', visitorRouter);
app.use('/product',prodcutRouter);
app.use('/quantity',quantityRouter);


app.listen(PORT,'localhost',(req,res)=>{console.log(`Server started at ${PORT}`)})