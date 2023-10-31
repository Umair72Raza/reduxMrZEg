const express = require('express')
const router = express.Router();
const visitorController = require('../controller/visitor');

router.post('/createvisitor',visitorController.createAVisitor);
router.get('/getvisitors',visitorController.getAllVisitors);
router.put('/updateVisitor/',visitorController.updateVisitor);
router.get('/getByID/:id',visitorController.getVisitorById)
module.exports = router