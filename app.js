var express = require('express');
var app = express();
var userController = require('./controllers/user.controller');

app.use(express.json());//funcion para poder leer los valores enviados en metodos post mediante el body
app.use(express.urlencoded({extended: true}));

app.get('/api/users', userController.getUsers);

app.post('/api/user', userController.addUser);
//app.delete('api/user')


app.get('/api/user', userController.getUser);

app.delete('api/user', userController.deleteUser);


module.exports = app;