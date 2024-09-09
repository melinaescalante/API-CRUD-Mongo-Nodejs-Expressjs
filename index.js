const express= require('express')
const routerAPI= require('./routes')
//Middleware de express
const port=3000
const app=express()
app.use(express.json())
app.get('/', (req,res)=>{
    res.status(200).send('<h1>API rest</h1>')
})

routerAPI()
app.listen(port, ()=>{
    console.log(`Escuchando al puerto ${port}`)
})