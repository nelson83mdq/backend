'use strict'
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

// archivos de rutas

var project_routes = require('./routes/project_routes');

//middlewares

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//CORS

//rutas
/*
app.get('/test', (req, res) =>{
    res.status(200).send({
        message: 'echo del servidor.'
    });
});

app.post('/test/:id', (req, res) =>{
    console.log(req.headers.nombre);
    console.log(req.query.web);
    console.log(req.params.id);
    res.status(200).send({
        message: 'peticion POST...'
    });
});

app.get('/', (req, res) =>{
    res.status(200).send(
        "<h1> :::   servidor corriendo   ::: </h1>"
    );
});
*/

//nuevas rutas
app.use('/api', project_routes);

//exportar
module.exports = app;
