const Quantity = require('../model/quantity')

const createQuantity = async(req,res,next) => {
    try {
        const {visitorId, productId, value} = req.body;
        const newQuantity = new Quantity({visitorId,productId,value});
        await newQuantity.save();    
        res.status(201).send(newQuantity);
    } catch
     (error) {
        
    }
}

const getQuantityByProductId = async(req,res,next)=>{
    try{
    const {productId} =  await req.params;
    console.log(productId);
    const quantities = await Quantity.find({productId: productId}).populate("productId");
    res.status(201).json({quantities});
}   
catch(error){
    next(error);
}
}

const getQuantityByVisitorId = async(req,res,next)=>{
    try{
    const {visitorId} = await req.params;
    console.log(visitorId);
    // const quantities = await Quantity.find({visitorId: visitorId}).populate("visitorId");
//try using match
    let results = await Quantity.find({visitorId: visitorId}).populate([{path: 'visitorId', select: 'visitorName'}, {path: 'productId', select: 'productName'}]);


    res.status(201).json({results});
}   
catch(error){
    next(error);
}
}



module.exports = {createQuantity, getQuantityByProductId, getQuantityByVisitorId};