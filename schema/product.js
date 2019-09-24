var mongoose = require('mongoose');
var schema = mongoose.Schema;
var productSchema = new schema ({
    name: String,
    price: Number,
    desc: String,
    phone:  {
        type: Number,
        min: [6, 'Too small number'],
        max: 12,    
      }
});
var productModel =  mongoose.model("Product", productSchema);
module.exports = productModel;