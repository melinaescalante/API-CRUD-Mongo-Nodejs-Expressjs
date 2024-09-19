
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creo el Esquema
const mySchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', mySchema);
// Exporto el model
module.exports =User;