'use strict'

//guardamos en una variable las propiedades del modulo mongosse en node_modules
var mongoose = require('mongoose');

//se carga en una variable la propiedad de esquema
var Schema = mongoose.Schema;

//creamos el esquema en un objeto(se podria decir que es la estructura de una tabla o la de la collecion de mongo)
var AlumnoSchema = new Schema({
    rut: String,
    nombre: String,
    apellido: String,
    edad: Number
});


//exportamos el objeto y pasamos 2 parametros
//el primer parametro es el nombre de la coleccion(tabla)
module.exports = mongoose.model('alumno', AlumnoSchema);

