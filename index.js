var express = require('express');
var app = express();
var port = 3000;
const password = 'conatleticotodos'
var URL = `mongodb+srv://dante-sarmiento:${password}@cluster0.9bcvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
var mongoose = require('mongoose');

async function connect() {
    try {
    await mongoose.connect(URL);
    console.log('connected to mongoDB');
    app.listen(port, () => { 
        console.log(`server started on port ${port}`)
    })

    }
    catch(err) {
        console.log('\x1b[31m Error al conectar con MongoDB \x1b[37m');
    } 
}

connect();

// app.listen(port, ()=> {
//     console.log('servidor esta corriendo');
// })

// app.get('/hello', function(req, res) {
//     res.send('hello world');
// })