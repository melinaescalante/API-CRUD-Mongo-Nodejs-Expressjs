const express = require('express')
const router= express.Router()

//Rutas

router.get('/',(req,res)=>{
    console.log('Get users')
})
router.get('/:id',(req,res)=>{
    console.log('Get users by id')
})

//Post users
router.post('/',(req,res)=>{
    console.log('Post users')
})
//Actualizar user
router.post('/:id',(req,res)=>{
    console.log('Put users')
})
//Delete user
router.delete('/:id',(req,res)=>{
    console.log('Delete users')
})

module.exports=router;