const Product = require('../model/product')

const createProduct = async(req,res,next) =>{
    try {
        const {visitorId, productName}  = req.body;
        const product = new Product({visitorId,productName});
        await product.save();
        res.status(201).send(product);

    } 
    catch (error) {
      res.status(400).send({error: error.message});   
    }
}

const getAllProducts = async(req,res,next) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json(allProducts);
    } 
    catch (error) {
        res.status(500).send({error: error.message});    
    }
}

module.exports = {createProduct , getAllProducts}