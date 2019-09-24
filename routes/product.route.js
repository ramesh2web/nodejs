var productController = require('../controllers/ProductController');
var productControllerObj = new productController();
var util = require('util');

const productRouter = require('express').Router();
  
    // Display all products
    productRouter.get('/', productControllerObj.fetchAll);
    productRouter.get('/:id(\\d+)/', productControllerObj.findOne);
    productRouter.get('/search', productControllerObj.searchInMongoDb);
   // productRouter.post('/', productControllerObj.save);
    productRouter.post('/', productControllerObj.saveProductByMongo);


module.exports = productRouter;
