
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creo el Esquema
const mySchema = new Schema({
    full_name:String,
    email: String,
    password:  String

});

const User = mongoose.model('User', mySchema);
// Exporto el model
module.exports =User;