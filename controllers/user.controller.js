const userSchema = require('../schemas/user.schema');
var User = require('../schemas/user.schema');

function addUser(req, res){
    let newUser = new User(req.body);
    // newUser.fullName = req.body.fullName;
    // newUser.email = req.body.email;
    // newUser.password = req.body.password;
    newUser.save()// sirve para guardar en la base de datos
    res.send({ usuarioNuevo: newUser })
}

async function getUsers(req, res){
    const usuariosDB = await User.find()
    res.send({ users: usuariosDB })
}

async function getUser(req, res){
    //id que recibimos desde el endpoint
    const userId = req.query.user_id;
    //buscamos especificamente ese id en nuestra colleccion users(base de datos)
    const user = await User.findById(userId);
    console.log(user)
    // si no encontramos el usuario
    if(!user) return res.status(404).send ('no se encontro el usuario que busca');

    return res.status(200).send({ user: user })
}

async function deleteUser(req, res){
    const user_deleted = req.query.user_id;

    const user = await User.findByIdAndDelete(user_deleted);
    console.log(user);
    
    res.send({ userDeleted: user_deleted });
}

async function updateUser(req, res) {
    const id = req.params.upd_id;

    const userChangesToApply = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, userChangesToApply, { new: true });
    if(!updatedUser) return res.status(404).send('No se encontro el usuario');
    
    return res.status(200).send(updatedUser)
}



module.exports = {
    addUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}