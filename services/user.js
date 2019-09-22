
const user = function(database) {
this.database = database;
this.fetchAll = function(req,res) {
    return {
        name: 'ramesh',
        phone: 299292929,
        host: this.database.connection
    }
}

}
module.exports = user;

