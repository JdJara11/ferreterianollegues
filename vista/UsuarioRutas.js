const express = require('express');
const router = express.Router();
const usuariocontrolador = require('../controlador/UsuarioControlador.js');

router.get('/', usuariocontrolador.obtenerUsuarios);
router.post('/', usuariocontrolador.crearUsuario);
router.put('/:id', usuariocontrolador.actualizarUsuario);
router.delete('/:idUsuario', usuariocontrolador.eliminarUsuario);

module.exports = router;