const { Products } = require("../models/Products");
const getProducts = async (request, response) => {
  const productos = new Products();
  const data = await productos.products;
  console.table(data);
  response.status(200).send(data);
};
const getProductById = async (request, response) => {
  const id = parseInt(request.params.id);
  const productos = new Products();

  const producto = await productos.getProductById(id);
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
    information.title,
    information.description,
    information.price,
    information.image,
    information.stock
  );

  Product.updateProduct(
    id,
    information.title,
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
  const productos = new Products();

  const product =await productos.getProductById(id)
  if (product) {
    response.status(200).json({mensaje: "Producto eliminado"})
  } else {
    response.status(400).json({mensaje: "Producto no se ha podido eliminar"})
  }
}
module.exports = { addProduct, getProductById, getProducts, updateProduct , deleteProduct};



