var mongoose = require('mongoose');
const mongooseService = function(config) {
    this.config = config;

    this.getMongoConnection = async function() {
        mongoose.connect(this.config.mongoDB, { useNewUrlParser: true });
         var db = mongoose.connection;
        return db;
    }
}
module.exports = mongooseService;
