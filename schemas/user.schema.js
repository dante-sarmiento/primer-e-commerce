var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    fullName: { type: String},
    email: {type: String},
    password: {type: String}
});

module.exports = mongoose.model('User', UserSchema)