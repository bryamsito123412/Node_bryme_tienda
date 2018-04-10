// Definimos modulos
const express = require("express");
const bodyParser = require("body-parser");
const api = require('./routes')
const cors = require('cors')

// Instanceamos los modulos
const app = express();
//usamos middelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/api', api)



module.exports = app