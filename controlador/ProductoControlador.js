const modelo = require('../modelo/ProductoModelo.js');

const obtenerProductos = (req, res) => {
  const productos = modelo.getAllProductos();
  res.json(productos);
};

const crearProducto = (req, res) => {
  const { t1 :idProducto, t2 :producto, t3 :vlrUnitario } = req.body;

  if (modelo.getProductoById(idProducto)) {
    return res.status(400).json({ error: 'El producto ya existe' });
  }

  const nuevo = {
    idProducto,
    producto,
    vlrUnitario
  };

  const productoCreado = modelo.addProducto(nuevo);
  res.status(201).json(productoCreado);
};

const actualizarProducto = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const actualizado = modelo.updateProducto(id, data);
  if (!actualizado) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json(actualizado);
};

const eliminarProducto = (req, res) => {
  const id = req.params.idProducto;

  const eliminado = modelo.deleteProducto(id);
  if (!eliminado) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json({ mensaje: 'Producto eliminado', producto: eliminado });
};

module.exports = {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};