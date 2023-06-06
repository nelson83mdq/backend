'use strict'

//import { default as mongoose } from "mongoose";
var mongoose_ = require('mongoose');
var app = require('./app');
const SERVER_PORT = 3700;

mongoose_.Promise = global.Promise;
console.log('starting the server......');
// hay que usal el ip en vez del localhost sino crea una falla y no se conecta
mongoose_.connect('mongodb://127.0.0.1:27017/portfolio')
    .then(()=>{
        console.log("conexion a la base de datos exitosa");
        //creacion del servidor
        
        app.listen(SERVER_PORT, () =>{
            console.log('Servidor corriendo correctamente en url: localhost:3700');
        })
    })
    .catch(err=>console.log('Error: ',err));