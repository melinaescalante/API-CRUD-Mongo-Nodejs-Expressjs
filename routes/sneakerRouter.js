const express = require('express')
const router= express.Router()
const { createProduct, getProductsById, getProducts, updateProductById , deleteProductById, getProductByName } = require('../controllers/sneakerController');

//Rutas
router.get('/', getProducts);
router.get('/:id', getProductsById);
router.get('/model/:name', getProductByName);
router.post('/', createProduct);
router.delete('/:id',deleteProductById)
router.put('/:id', updateProductById)


module.exports=router;