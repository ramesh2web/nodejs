var config = require('../config/config');
var database = require('../services/database');
var product = require('../services/product');
var jwt = require('../services/jwt');
var mongoose = require('../services/mongoose');
var databaseObj = new database(config);
var productModel = require('../schema/product');

module.exports =  {
    config: config,
    database: databaseObj,
    product: new product(databaseObj, productModel),
    jwt: new jwt(config),
    mongoose: new mongoose(config)
}
