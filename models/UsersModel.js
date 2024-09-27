
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creo el Esquema
const mySchema = new Schema({
    created_date:{
        type:Date,
        default:Date.now()
    },
    full_name:String,
    email: {
        type:String,
        required:true,
        unique:true},
    password: {
        type:String, 
        required:true
    }

});

const User = mongoose.model('User', mySchema);
// Exporto el model
module.exports =User;