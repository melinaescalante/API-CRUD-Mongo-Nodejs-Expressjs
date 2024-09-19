const express = require('express')
const router= express.Router()
const { addUser, getUserById, getUsers, updateUser , deleteUser } = require('../controllers/userController');

//Rutas
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', addUser);
router.delete('/:id',deleteUser)
router.put('/:id', updateUser)


module.exports=router;