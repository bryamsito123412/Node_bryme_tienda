const Curso = require('../models/curso')

function insertCurso(req, res) {

    let curso = new Curso()
    curso.codigo_curso = req.body.codigo_curso
    curso.nombre_curso = req.body.nombre_curso
    curso.lugar = req.body.lugar
    curso.fecha_inicio = req.body.fecha_inicio
    curso.fecha_termino = req.body.fecha_termino

    curso.save((err, cursoStored) => {

        if (err) res.status(500).send({message: 'error al guardar curso'})

        res.status(200).send({curso: cursoStored})

    })
}

function getCursos(req, res){

    Curso.find({}, (err, cursos) => {

        if (err) return res.status(500).send({message: "no se pudo realizar peticion"})
        if (!cursos) return res.status(404).send({message: "No hay cursos"})

        res.status(200).send({cursos})
    })
}

module.exports = {
    insertCurso,
    getCursos
};