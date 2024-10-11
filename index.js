const express = require('express')
const routerAPI = require('./routes')
const db = require('./config/database.js')
const fs = require('fs')
require('dotenv').config()
const port = process.env.PORT

//Middleware de express
const app = express()
app.use(express.json())
//Definimos la carpeta public para archivos statics
app.use(express.static('public'))

app.use((req, res, next) => {
    console.log('Soy el middleware');
    next();
})
app.get('/', (req, res) => {
    res.status(200).send('<h1>API rest</h1>')
})

routerAPI(app)
app.listen(port, () => {
    console.log(`Escuchando al puerto ${port}`)
})