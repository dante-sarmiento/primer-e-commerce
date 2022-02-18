const userSchema = require('../schemas/user.schema');
var User = require('../schemas/user.schema');

function addUser(req, res){
    let newUser = new User(req.body);
    // newUser.fullName = req.body.fullName;
    // newUser.email = req.body.email;
    // newUser.password = req.body.password;
    newUser.save()
    res.send({ usuarioNuevo: newUser })
}

async function getUsers(req, res){
    const usuariosDB = await User.find()
    res.send({ users: usuariosDB })
}

module.exports = {
    addUser,
    getUsers
}