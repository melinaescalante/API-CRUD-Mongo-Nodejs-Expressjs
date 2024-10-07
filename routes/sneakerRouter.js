const express = require('express')
const router= express.Router()
const { createProduct, getProductsById, getProducts, updateProductById , deleteProductById } = require('../controllers/sneakerController');

//Rutas
router.get('/', getProducts);
router.get('/:id', getProductsById);
router.post('/', createProduct);
router.delete('/:id',deleteProductById)
router.put('/:id', updateProductById)


module.exports=router;