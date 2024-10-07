const express = require('express')
const router= express.Router()
const { createBrand, getBrandById, getBrands, updateBrandById , deleteBrandById , getBrandByName} = require('../controllers/brandController');

//Rutas
router.get('/', getBrands);
router.get('/:id', getBrandById);
router.get('/company/:name', getBrandByName);
router.post('/', createBrand);
router.delete('/:id',deleteBrandById)
router.put('/:id', updateBrandById)


module.exports=router;