const container = require("../container/container");

const productController = function() {

this.fetchAll =   function(req,res) {
    container.product.fetchAll().then(function(rows){
        res.send(rows);
    }).catch(function(error){
        console.log(error);
    })
}

this.findOne = function(req, res) {  
    var params = req.params;
    var productId = params.id;
    container.product.findOne(productId).then(function(rows) {
        res.send(rows);
    }).catch(function(error) {
        console.log(error);
    });    
}


this.save = function(req, res) {
    container.product.save(req.body).then(function(result){
        if(result.affectedRows > 0) {
            res.send({status:'success', result:req.body});        
        } else {
            res.send({'status': 'failed'});
        }
    }).catch(function(error){
        console.log(error);
    })
}

this.saveProductByMongo = function(req, res) {
var productObj = req.body;
container.product.saveIntoMongo(productObj).then(function(result){
    res.send(result);
}).catch(function(error){
    console.log(error);
})

}

this.searchInMongoDb = function(req, res) {
    var body = req.query;  
    container.product.search(body).then(function(result){
        res.send(result);
    }).catch(function(error){
        res.send(error);
    })
}
}



module.exports = productController;

