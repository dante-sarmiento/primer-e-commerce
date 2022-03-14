var express = require('express');
var app = express.Router();

var productController = require('../controllers/product.controller');

app.post('/product', productController.addProduct);
app.get('/products', productController.getProducts);
app.get('/product', productController.getProduct);
app.delete('/product/', productController.deleteProduct);
app.put('/product/:upd_id', productController.updateProduct);


module.exports = app;

