const express = require('express')
const router= express.Router()
//  Importamos controlador y metodos
const { createUser, getUsers,getUsersById,deleteUserById,updateUserById, login , getUserByName} = require('../controllers/userController');

//Rutas
//Traemos todos los usuarios
router.get('/', getUsers);

//Traemos un usuario
router.get('/:id', getUsersById);

//Traemos un usuario por nombre
router.get('/name/:full_name', getUserByName);

//Creamos un usuario
router.post('/', createUser);
//Login
router.post('/login', login);

//Creamos un usuario
router.put('/:id', updateUserById);

//Eliminamos un usuario por id
router.delete('/:id', deleteUserById);


module.exports=router;