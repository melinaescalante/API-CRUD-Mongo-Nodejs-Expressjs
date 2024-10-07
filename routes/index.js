//Importa rutas

const sneakerRouter= require('./sneakerRouter');
const usersRouter= require('./userRouter');
const brandsRouter= require('./brandRouter');
//Defino la funcion de la aplicacion de entrada
function routerAPI(app){
//Definimos los endpoints

app.use('/api/sneakers', sneakerRouter);
app.use('/api/users', usersRouter)
app.use('/api/brands', brandsRouter)
}

module.exports= routerAPI;