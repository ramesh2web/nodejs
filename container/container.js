var config = require('../config/config');
var database = require('../services/database');
var product = require('../services/product');
var jwt = require('../services/jwt');
var databaseObj = new database(config);

module.exports =  {
    config: config,
    database: databaseObj,
    product: new product(databaseObj),
    jwt: new jwt(config)
}
