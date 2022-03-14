let express = require('express');
let app = express();
let user_rotes = require('./routes/user.routes');
let product_routes = require('./routes/product.routes');
let cors = require('cors')

app.use(cors())
app.use(express.json());//funcion para poder leer los valores enviados en metodos post mediante el body
app.use(express.urlencoded({extended: true}));

app.use('/api', [
    user_rotes,
    product_routes
    // orders_routes,
]);

module.exports = app;