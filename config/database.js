const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'imtheroot2', 
    password: 'imtheroot.', 
    database: 'incidencias', 
    waitforConnnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

pool.getConnection()
    .then(()=> console.log('conectado a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));

module.export = pool;
