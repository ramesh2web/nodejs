const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express()
const config = require('./config/config');
const port = config.port;
const authController = require('./controllers/AuthController');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(cors());
const container = require("./container/container");
container.mongoose.getMongoConnection().then(function(connection) {
    //connection.close();
   //console.log("connected");  
    }).catch(function(error){
        console.log(error);
})


const productRoutes = require('./routes/product.route');
const authControllerObj = new authController();
app.post('/login', authControllerObj.login);
app.use('/products',productRoutes);
//productRoutes(app);

//var containerObj = new container();

//app.get('/', (req, res) => res.send(productControllerObj.getName2()));





app.listen(port, () => console.log(`Example app listening on port ${port}!`))
