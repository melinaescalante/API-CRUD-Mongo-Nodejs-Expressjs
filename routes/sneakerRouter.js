const express = require('express')
const router= express.Router()
const auth = require('../middleware/auth')

const { createProduct, getProductsById, getProducts, updateProductById , deleteProductById, getProductByName, getFilterByColor, getFilterByBrand} = require('../controllers/sneakerController');

//Rutas
// router.get('/',auth, getProducts);
router.get('/', getProducts);
router.get('/:id', getProductsById);
router.get('/model/:name', getProductByName);
router.get('/color/:color', getFilterByColor);
router.get('/brand/:brand', getFilterByBrand);
router.post('/', createProduct);
router.delete('/:id',deleteProductById)
router.put('/:id', updateProductById)


module.exports=router;