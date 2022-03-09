var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Categories = [
    'VERDURAS',
    'FRUTAS',
    'CARNES',
    'LACTEOS',
    'SNACKS',
    'BEBIDAS',
    'GRANEL',
    'LIMPIEZA',
    'PERFUMERIA',
    'GENERAL',
];
var ivaOptions = [
    21,
    10.5,
    0,
];

var ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    description: {
        type: String,
        maxlength: 200
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Boolean,
        required: false
    },
    category_id: {
        type: String,
        required: true,
        default: 'GENERAL',
        enum: Categories,
    },
    cod: {
        type: String,
        // ref: 'codigo',
        maxlength: 4,
        minlength: 4
    },
    iva: {
        type: String,
        required: true,
        default: 21,
        enum: ivaOptions,
    },
    // createdAt: { type: Date, required: true, default: Date.now },
    // updatedAt: { type: Date },
    
    // clientId: { type: String, ref: 'User', required: true }
})

module.exports = mongoose.model('Product', ProductSchema)