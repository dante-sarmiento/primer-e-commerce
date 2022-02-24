var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rolesValidos = [
    'ADMIN_ROLE',
    'USER_ROLE', //personal interno de la empresa
    'CLIENT_ROLE'//clientes usuarios de mi app
]

var UserSchema = new Schema({
    fullName: { type: String, required: true, maxlength: 40 },
    email: { type: String, required: true, unique: true },
    phone: { type: String, maxlength: 14 },
    password: { type: String },
    adress: {
        street: { type: String },
        steet_numer: { type: Number },
    },
    active: { type: Boolean, default: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos }
});

module.exports = mongoose.model('User', UserSchema)