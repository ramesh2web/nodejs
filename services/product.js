const product = function(database) {
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
}

module.exports = product;

