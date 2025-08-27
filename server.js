const express = require('express');
const cors = require('cors');
const app = express();
const usuariorutas = require('./vista/UsuarioRutas');
const productorutas = require('./vista/ProductoRutas');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/usuario', usuariorutas);
app.use('/producto', productorutas)

app.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});