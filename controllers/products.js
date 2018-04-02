const Product = require('../models/products')

function getProduct(req, res) {

    let productId = req.params.productId

    Product.findById(productId, (err, product) => {

        if (err) return res.status(500).send({message: "no se pudo realizar peticion"})
        if (!product) return res.status(404).send({message: "producto no existe"})

        res.status(200).send({product})

    })
}

function getProducts(req, res) {
    Product.find({}, (err, products) => {

        if (err) return res.status(500).send({message: "no se pudo realizar peticion"})
        if (!products) return res.status(404).send({message: "No hay productos"})

        res.status(200).send({products})
    })
}

function saveProduct(req, res) {

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {

        if (err) res.status(500).send({message: 'error al guardar producto'})

        res.status(200).send({product: productStored})

    })
}

function updateProduct(req, res) {

    let productId = req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500)
        res.status(200).send({message: "producto fue actualizado"})

    })
}

function deleteProduct(req, res) {

    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
        if (err) res.status(500)

        product.remove(err => {
            if (err) res.status(500)
            res.status(200).send({message: "producto fue borrado"})
        })
    })
}

module.exports = {

    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct

}