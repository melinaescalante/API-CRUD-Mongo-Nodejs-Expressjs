const express = require('express')
const router= express.Router()
//  Importamos controlador y metodos
const { createUser, getUsers,getUsersById,deleteUserById,updateUserById } = require('../controllers/userController2');

//Rutas
//Traemos todos los usuarios
router.get('/', getUsers);

//Traemos un usuario
router.get('/:id', getUsersById);

//Creamos un usuario
router.post('/', createUser);

//Creamos un usuario
router.put('/:id', updateUserById);

//Eliminamos un usuario por id
router.delete('/:id', deleteUserById);


module.exports=router;