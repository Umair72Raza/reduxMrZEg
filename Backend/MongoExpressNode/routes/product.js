const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

router.post('/productcreater',productController.createProduct);
router.get('/getproducts',productController.getAllProducts);
module.exports = router;