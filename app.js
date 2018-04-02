// Definimos modulos
const express = require("express");
const bodyParser = require("body-parser");
const productCtrl = require('./controllers/products')
const api = require('./routes')

// Instanceamos los modulos
const app = express();
//usamos middelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api)


module.exports = app