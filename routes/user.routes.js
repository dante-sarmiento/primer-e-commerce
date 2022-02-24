var express = require('express');
var app = express.Router();
var userController = require('../controllers/user.controller');



app.get('/users', userController.getUsers);

app.post('/user', userController.addUser);

app.get('/user', userController.getUser);

app.delete('/user', userController.deleteUser);

app.put('/user/:upd_id', userController.updateUser);


module.exports = app;
