const mysql = require('mysql');
const database = function(config) {
this.config2 = {
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password
}    
this.connection = mysql.createPool(this.config2);

 this.query = function(sql, args) {  

return new Promise((resolve, reject) => { 
    this.connection.query(sql, args, (err, rows) => {
        if (err)
        return reject(err);
        resolve(rows);

    });
    
});
}

}
module.exports = database;

