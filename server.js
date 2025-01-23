const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const pool = require('config/database');
// console.log('Base de datos cargada:', pool);

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.get('/', (req, res) => {
    res.json({ message: '¡Hola desde el backend! @ 127.0.0.1' });
});

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo @ http://localhost:${PORT}`);
});

// app.get('/db', (req, res) => {

// });