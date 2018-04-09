const express = require("express")
const api = express.Router()
const auth = require('../middlewares/auth')
const productCtrl = require('../controllers/products')
const cursosCtrl = require('../controllers/curso')
const alumnosCtrl = require('../controllers/alumnos')
const userCtrl = require('../controllers/user')
const cors = require('cors')

api.get('/product', cors(), productCtrl.getProducts);
api.get('/product/:productId', productCtrl.getProduct);
api.post('/product' , productCtrl.saveProduct);
api.put('/product/:productId' , productCtrl.updateProduct);
api.delete('/product/:productId' , productCtrl.deleteProduct);
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {

    res.status(200).send({ message: "tienes acceso"})

});

//RUTAS DE CURSOS

api.post('/curso', cors(), cursosCtrl.insertCurso)
api.get('/cursos', cors(), cursosCtrl.getCursos)

//Rutas de Alumnos

api.post('/alumno', cors(), alumnosCtrl.insertAlumno)
api.get('/alumnos', cors(), alumnosCtrl.getAlumnos)

module.exports = api