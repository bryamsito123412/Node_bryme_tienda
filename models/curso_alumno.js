'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CursoAlumnosSchema = Schema({
    //guardamos el Objetcid del modelo "curso"
    codigo_curso: {type: Schema.ObjectId, ref: 'curso' },
    //guardamos el Objetcid del modelo "alumno"
    rut_alumno: {type: Schema.ObjectId, ref: 'alumno' },
    licencia: String,
    ncontrato: String,
    total: Number,
    saldo: Number
});

module.exports = mongoose.model('curso_alumno', CursoAlumnosSchema);