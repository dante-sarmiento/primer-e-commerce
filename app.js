var express = require('express');
var app = express();
var user_rotes = require('./routes/user.routes');

app.use(express.json());//funcion para poder leer los valores enviados en metodos post mediante el body
app.use(express.urlencoded({extended: true}));

app.use('/api', [
    user_rotes,
    // product_routes,
    // orders_routes,
]);

module.exports = app;