const express = require("express")
const api = express.Router()
const auth = require('../middlewares/auth')
const productCtrl = require('../controllers/products')
const userCtrl = require('../controllers/user')

api.get('/product', productCtrl.getProducts);
api.get('/product/:productId', productCtrl.getProduct);
api.post('/product' , productCtrl.saveProduct);
api.put('/product/:productId' , productCtrl.updateProduct);
api.delete('/product/:productId' , productCtrl.deleteProduct);
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {

    res.status(200).send({ message: "tienes acceso"})

});

module.exports = api