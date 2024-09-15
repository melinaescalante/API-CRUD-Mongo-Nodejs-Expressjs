const express = require('express')
const router= express.Router()
const { addProduct, getProductById, getProducts, updateProduct , deleteProduct } = require('../controllers/productController');

//Rutas
router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.delete('/:id',deleteProduct)
router.put('/:id', updateProduct)


module.exports=router;