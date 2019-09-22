var productController = require('../controllers/ProductController');
var productControllerObj = new productController();
var util = require('util');

const productRouter = require('express').Router();
  
    // Display all products
    productRouter.get('/', productControllerObj.fetchAll);
    productRouter.get('/:id', productControllerObj.findOne);
    productRouter.post('/', productControllerObj.save);


module.exports = productRouter;
