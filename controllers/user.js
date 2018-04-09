const mongoose = require('mongoose')
const User = require('../models/users')
const service = require('../services')

function signUp(req, res) {

    const user = new User({

        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password

    })

    user.save((err) => {

        if (err) res.status(500).send({ message: "error al crear usuario"})

        return res.status(201).send({ token: service.createToken(user) })

    })

}
function signIn(req, res) {

    User.find({ email: req.body.email }, (err, user) =>{
        if (err) return  res.status(500).send({ message: err})
        if (!user) res.status(404).send({ message: "No existe el usuario"})

        req.user = user
        res.status(200).send({

            message: "Te has logeado",
            token: service.createToken(user)
        })

    })


}

function getUser(req, res) {



}

module.exports = {
    signUp,
    signIn
}