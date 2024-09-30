require('dotenv').config()

const url= process.env.URI_DB

const mongoose = require('mongoose');
mongoose.connect(url);
const db = mongoose.connection;
db.on('error',()=>console.log('error'))
db.once('open',()=>{console.log('CONEXION CORRECTA')})

module.exports= db