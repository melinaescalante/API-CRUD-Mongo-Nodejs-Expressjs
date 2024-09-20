//Importa rutas

const productsRouter= require('./productsRouter');
const usersRouter= require('./userRouter2');
//Defino la funcion de la aplicacion de entrada
function routerAPI(app){
//Definimos los endpoints
app.use('/products', productsRouter);
app.use('/users', usersRouter)
}

module.exports= routerAPI;