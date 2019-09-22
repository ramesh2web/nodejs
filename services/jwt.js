const jwttoken = require('jsonwebtoken');

const jwt = function(config) {
this.config = config;
this.sign =   function(payload) {

        return new Promise((resolve, reject) => { 
            //resolve(payload);                            
   
          var token =  jwttoken.sign(payload ,this.config.jwtKey, {
                algorithm: 'HS256',
                expiresIn:this.config.jwtExpirySeconds
              }, function(err, token) {
                  if(err){
                      reject(err);
                  }
                resolve(token);
              });
           
                    
        })
}
this.verify = function(token) {
    return new Promise((resolve, reject) => {
        jwttoken.verify(token, this.config.jwtKey,function(err, decoded) {
            if(err)
            reject(err);
            resolve(decoded);
        });
    })
   
}
this.getUserInfo = function() {
    return this.decodedToken;
}

}

module.exports = jwt;

