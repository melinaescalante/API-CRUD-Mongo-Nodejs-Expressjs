//Importa rutas

const productsRouter= require('./productsRouter');
const usersRouter= require('./userRouter');
//Defino la funcion de la aplicacion de entrada
function routerAPI(app){
//Definimos los endpoints

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter)
}

module.exports= routerAPI;