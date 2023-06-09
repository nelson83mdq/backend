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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//nuevas rutas
app.use('/api', project_routes);

//exportar
module.exports = app;
