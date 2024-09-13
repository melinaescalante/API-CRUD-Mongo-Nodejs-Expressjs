const express= require('express')
const routerAPI= require('./routes')

require('dotenv').config()
//Middleware de express
const port=process.env.PORT
const app=express()
app.use(express.json())
app.get('/', (req,res)=>{
    res.status(200).send('<h1>API rest</h1>')
})

routerAPI(app)
app.listen(port, ()=>{
    console.log(`Escuchando al puerto ${port}`)
})