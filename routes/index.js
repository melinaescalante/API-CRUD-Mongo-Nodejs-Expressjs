//Importa rutas

const productsRouter= require('./productsRouter');
// const productsRouter= require('./productsRouter');
//Defino la funcion de la aplicacion de entrada
function routerAPI(app){
//Definimos los endpoints
app.use('/products', productsRouter);
// app.use('/products', productsRouter)
}

module.exports= routerAPI;