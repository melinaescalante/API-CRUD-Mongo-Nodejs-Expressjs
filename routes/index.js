//Importa rutas

const productsRouter= require('./productsRouter');
const usersRouter= require('./usersRouter');
//Defino la funcion de la aplicacion de entrada
function routerAPI(app){
//Definimos los endpoints
app.use('/products', productsRouter);
app.use('/users', usersRouter)
}

module.exports= routerAPI;