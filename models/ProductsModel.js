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
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
});

const Product = mongoose.model("Product", mySchema);
// Exporto el model
module.exports = Product;
