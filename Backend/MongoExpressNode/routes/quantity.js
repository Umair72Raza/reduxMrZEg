const express = require('express');
const router = express.Router();
const quantityController = require('../controller/quantity')


router.post('/createQuantity',quantityController.createQuantity);
router.get('/products/:productId/quantity',quantityController.getQuantityByProductId);
router.get('/visitors/:visitorId/quantity',quantityController.getQuantityByVisitorId);



module.exports = router;
