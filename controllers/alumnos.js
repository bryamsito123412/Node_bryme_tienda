const Alumnos = require('../models/alumno')

function insertAlumno(req, res) {

    let alumno = new Alumnos()

    alumno.rut = req.body.rut
    alumno.nombre = req.body.nombre
    alumno.apellido = req.body.apellido
    alumno.edad = req.body.edad

    alumno.save((err, alumnoStored) => {

        if (err) res.status(500).send({message: 'error al guardar alumno'})

        res.status(200).send({alumno: alumnoStored})

    })

}

function getAlumnos(req, res) {

    Alumnos.find({}, (err, alumnos) => {

        if (err) return res.status(500).send({message: "no se pudo realizar peticion"})
        if (!alumnos) return res.status(404).send({message: "No hay alumnos"})

        res.status(200).send({alumnos})
    })

}



module.exports = {

    insertAlumno,
    getAlumnos

}