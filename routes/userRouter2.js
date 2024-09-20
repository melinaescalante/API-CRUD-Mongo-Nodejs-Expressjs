const express = require('express')
const router= express.Router()
//  Importamos controlador y metodos
const { createUser, getUsers } = require('../controllers/userController2');

//Rutas
//Traemos todos los usuarios
router.get('/', getUsers);

//Creamos un usuario
router.post('/', createUser);


module.exports=router;