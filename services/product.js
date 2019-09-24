const product = function(database, productModel) {
this.productModel = productModel;
this.database = database;
this.fetchAll =   function() {
return new Promise((resolve, reject) => {
    this.database.query("select * from product").then(function(rows) {
     resolve(rows);  
    }).catch(function(error) {
        reject(error);
    })    
   })
}

this.findOne = function(productId) {
    return new Promise((resolve, reject)=> {
        this.database.query("select * from product where id = ?", [productId]).then(function(rows) {            
            resolve(rows);
        }).catch(function(error) {
            reject(error);
        })
    })
    //var result =  await this.database.query("select * from product");
    //return result;
}
this.save = function(productObj) {
    return new Promise((resolve, reject) => {
        this.database.query("insert into product set ?",productObj).then(function(result) {
            resolve(result);
        }).catch(function(error){
            reject(error);
        })

});
}

this.saveIntoMongo = function(productObj) {
    return new Promise((resolve, reject) => {
    var productModel = this.productModel;
    var productModelInstance = new productModel(productObj);
    productModelInstance.save(function(error,result){
        if(error) {
            reject(error);
        }
        resolve(result);

    })
    });

}
this.search = function(search){
    return new Promise((resolve, reject)=> {
        console.log(search.name);
        var query = this.productModel.find({ 'name': search.name });
        query.exec(function(error, result) {
            if(error) {
                reject(error);
            }
            resolve(result);
        })

    });

}


}

module.exports = product;

