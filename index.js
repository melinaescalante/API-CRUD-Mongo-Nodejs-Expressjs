const express = require('express')
const routerAPI = require('./routes')
const db = require('./config/database.js')
const fs = require('fs')
require('dotenv').config()
const port = process.env.PORT
//LLenamos la db
const importData = async () => {
    try {
        const vuelosData = JSON.parse(fs.readFileSync('./data/arcana.vuelos.json, utf - 8'));
        console.log('"Vuelos:', vuelosData);
        const usersData = JSON.parse(fs.readFileSync('./data/arcana.users.json, utf - 8'));
        console.log(usersData);
        const reservasuata = JSON.parse(fs.readFilesync('./data/arcana.reservas.json', 'utf - 8'));
        console.log(reservasData);

        await Vuelos.create(vuelosData)
        console.log("Vuelos importados exitosamente");
        await Users.deleteMany();
        await Users.create(usersData)
        console.log('Usuarios importados exitosamente')
        await Reservas.deleteMany()
        await Reservas.create(reservasData);
        console.log('Reservas importadas exitosamente')
    } catch (error) {
        console.error('Error al importar datos: ', error);
    }
};
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