const config = {
    port: 8004,
    //Database Configuratoin details
    host: 'localhost',
    user: 'root',
    password: '', 
    database:'api',
    mongoDB: 'mongodb://localhost:27017/ramesh',

    //Api Secret key
   
    jwtKey: 'xyz010019292929292',
    jwtExpirySeconds: '3000000'

}
module.exports = config;
