const container = require("../container/container");
const AuthController = function() {

    this.login = function(req, res) { 
        
        const payload = {
            username: 'ramesh',
            scope: 'admin',
            userid: '1'
        }
        
        container.jwt.sign(payload).then(function(token){

        res.send({status:'success', token: token });          
        }).catch(function(error){
            res.send(error);
        })
       
       
    }


    this.verifyToken = function(req, res, next) {
       const token = req.headers.token;
       if (!token) {
        return res.status(401).end();
      }
      container.jwt.verify(token).then(function(decoded){
          next();
      }).catch(function(error){
          res.send(error);
      })
      
      }
 
    this.refreshToken = function(req, res) {

    }

    


}




module.exports = AuthController;

