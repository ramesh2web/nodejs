const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express()
const config = require('./config/config');
const port = process.env.PORT || 5000;
const authController = require('./controllers/AuthController');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(cors());

const productRoutes = require('./routes/product.route');
const authControllerObj = new authController();
app.post('/login', authControllerObj.login);
app.use('/products',authControllerObj.verifyToken, productRoutes);
//productRoutes(app);

//var containerObj = new container();

//app.get('/', (req, res) => res.send(productControllerObj.getName2()));





app.listen(port, () => console.log(`Example app listening on port ${port}!`))
