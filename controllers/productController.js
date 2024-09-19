const { Products } = require("../models/Products");
const getProducts = async (request, response) => {
  const productos = new Products();
  const data = await productos.readJson();
  console.table(data);
  response.status(200).send(data);
};
const getProductById = async (request, response) => {
  const product = new Products();
  const productos = await product.readJson();
  const id = parseInt(request.params.id);

  const producto = await product.getProductById(id);
  if (producto) {
    response.status(202).json({ producto: producto });
  } else {
    response.status(400).json({ mensaje: "No existe producto" });
  }
};

const addProduct = async (request, response) => {
  const productos = new Products();

  const product = request.body;
  if (
    product.title &&
    product.description &&
    product.price &&
    product.image &&
    product.stock
  ) {
    await productos.addProductJson(product);
    response.status(202).json({ mensaje: "Producto Guardado" });
  } else {
    response.status(400).json({ mensaje: "Producto Incompleto" });
  }
};
const updateProduct = async (request, response) => {
  const productos = new Products();

  const id = parseInt(request.params.id);
  const product = await productos.getProductById(id);
  const information = request.body;
  console.log(
    information.name,
    information.description,
    information.price,
    information.image,
    information.stock
  );

  productos.updateProduct(
    id,
    information.name,
    information.description,
    information.price,
    information.image,
    information.stock
  );

  if (product) {
    response
      .status(202)
      .json({ mensaje: "Producto correctamente actualizado" });
  } else {
    response.status(400).json({ mensaje: "No existe producto" });
  }
};
const deleteProduct=async(request, response)=>{
  const id = parseInt(request.params.id);
  const products = new Products();
  const productos = await products.readJson();
  const product =await products.getProductById(id)
  
  if (product) {
    const updatedProductList= productos.filter(product=>product.id!==id)
    products.products=updatedProductList
    await products.writeJson()
    response.status(200).json({mensaje: "Producto eliminado"})
  } else {
    response.status(400).json({mensaje: "Producto no se ha podido eliminar"})
  }
}
module.exports = { addProduct, getProductById, getProducts, updateProduct , deleteProduct};



