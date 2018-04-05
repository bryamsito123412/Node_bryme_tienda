// Definimos modulos
const express = require("express");
const bodyParser = require("body-parser");
const productCtrl = require('./controllers/products')
const api = require('./routes')
const cors = require('cors')

// Instanceamos los modulos
const app = express();
//usamos middelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next())
app.use('/api', api)
app.use(cors())


module.exports = app