const Curso = require('../models/curso')

function getCursoAlumnos(req,res){

    CursoAlumnos.find().populate({patch: 'rut_alumno'}).exec((err, curso_alumno) => {
        if(err){
            res.status(500).send({message:'Error de conexión a la BD'});
        }else{
            if(!curso_alumno){
                res.status(404).send({message: 'No existe el curso'});
            }else{
                Curso.populate(curso_alumno, {path: 'codigocurso'}, (err, docingreso) => {

                    if(err){
                        res.status(500).send({message: 'Error en la peticiona la BD'});
                    }else{
                        res.status(200).send(curso_alumno);
                    }
                });
            }
        }
    });

}

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
    getCursoAlumnos,
    insertCurso,
    getCursos
};