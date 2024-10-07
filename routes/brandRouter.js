const express = require('express')
const router= express.Router()
const { createBrand, getBrandById, getBrands, updateBrandById , deleteBrandById } = require('../controllers/brandController');

//Rutas
router.get('/', getBrands);
router.get('/:id', getBrandById);
router.post('/', createBrand);
router.delete('/:id',deleteBrandById)
router.put('/:id', updateBrandById)


module.exports=router;