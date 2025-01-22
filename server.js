const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');


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

app.get('/db', (req, res) => {

    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306, // Puerto personalizado
        user: 'imtheroot2', // Usuario configurado en la base de datos
        password: 'imtheroot.', // Contraseña del usuario
        database: 'incidencias', // Nombre de la base de datos
    });

    connection.connect((err) => {
        if (err) {
          res.json(err.message);
        } else {
          res.json('Conexión exitosa a la base de datos');
        }
    });

    connection.end();

});