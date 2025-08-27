const express = require('express');
const router = express.Router();
const productocontrolador = require('../controlador/ProductoControlador.js');

router.get('/', productocontrolador.obtenerProductos);
router.post('/', productocontrolador.crearProducto);
router.put('/:id', productocontrolador.actualizarProducto);
router.delete('/:idProducto', productocontrolador.eliminarProducto);

module.exports = router;