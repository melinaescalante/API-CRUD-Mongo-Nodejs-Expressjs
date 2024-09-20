const express= require('express')
const routerAPI= require('./routes')
const mongoose = require('mongoose');
require('dotenv').config()
const port=process.env.PORT
//Middleware de express


// Conectamos a la db
mongoose.connect('mongodb://127.0.0.1:27017/app');
const db = mongoose.connection;

const app=express()
app.use(express.json())

app.use(  (req, res, next) => {
    console.log('Soy el middleware');
    next();
})
app.get('/', (req,res)=>{
    res.status(200).send('<h1>API rest</h1>')
})

routerAPI(app)
app.listen(port, ()=>{
    console.log(`Escuchando al puerto ${port}`)
})