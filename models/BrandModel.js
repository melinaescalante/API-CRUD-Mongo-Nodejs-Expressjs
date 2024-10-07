const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Creo el Esquema
const mySchema = new Schema({
    created_date: {
        type: Date,
        default: Date.now(),
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    country: {
        type: String,
    },
});

const Brand = mongoose.model("Brand", mySchema);
// Exporto el model
module.exports = Brand;
