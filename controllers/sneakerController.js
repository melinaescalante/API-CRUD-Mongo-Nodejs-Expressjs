const Product = require('../models/SneakerModel')
const Brand = require('../models/BrandModel')


const createProduct = async (req, res) => {
    const { name, description, price, stock, brandId } = req.body
    if (!name|| !price|| !stock || !brandId || !description) {
        res.status(400).json({ msg: "Faltan parámetros obligatorios", data: { name, description, price, stock, brandId } })
    }
    
    try {
        const brand = await Brand.findById( brandId)
        const product = new Product({ name, description, price, stock, brand:brand._id })
        await product.save();
        res.status(200).json({ msg: 'Producto creado', data: product })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ha ocurrido un error', data: {} })

    }
}
const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({ msg: 'Ok', data: products })
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, no se pudo traer todos los productos.' })

    }
}
const getProductsById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ msg: "Falta introducir el id.", data: { id } })
    }
    try {
        const product = await Product.findById(id)
        if (product) {
            res.status(200).json({ msg: 'Producto encontrado', data: {product} })
        } else {
            res.status(404).json({ msg: 'Producto no existente', data: {} })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, no se ha podido buscar por id.', data: {} })

    }
}
const getProductByName = async (req, res) => {
    const { name } = req.params;
    if (!name) {
        res.status(400).json({ msg: "Falta introducir el nombre para iniciar la busqueda.", data: { name} })
    }
    try {
        const product = await Product.findOne({ name});
        // const product = await Product.findById(id)
        if (product) {
            res.status(200).json({ msg: 'Producto encontrado por nombre', data: {product} })
        } else {
            res.status(404).json({ msg: 'Producto no existente', data: {} })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, no se ha podido buscar por nombre.', data: {} })

    }
}
const deleteProductById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ msg: "Falta introducir el id para eliminar.", data: { id } })
    }
    try {
        const product = await Product.findByIdAndDelete(id)
        if (product) {
            res.status(200).json({ msg: 'Producto eliminado', data: {} })
        } else {
            res.status(404).json({ msg: 'Producto no existente', data: {} })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, no se ha podido eliminar por id.', data: {} })

    }
}
const updateProductById = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock, brand } = req.body;
    if (!id) {
        res.status(400).json({ msg: "Falta introducir el id para iniciar la actualización.", data: { id } })
    }
    try {
        const product = await Product.findByIdAndUpdate(id,{ name, description, price, stock, brand},{new:true})
        if (product) {
            res.status(200).json({ msg: 'Producto actualizado', data: {product} })
        } else {
            res.status(404).json({ msg: 'Producto no existe, no es posible actualizar', data: {} })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, no se ha podido actualizar por id.', data: {} })

    }
}
module.exports = { createProduct, getProducts, getProductsById, deleteProductById, updateProductById, getProductByName }