//Importa rutas

const usersRouter= require('./usersRouter');
const productsRouter= require('./productsRouter');
//Defino la funcion de la aplicacion de entrada
function routerAPI(app){
//Definimos los endpoints
app.use('/users', usersRouter)
app.use('/products', productsRouter)
}

module.exports= routerAPI;