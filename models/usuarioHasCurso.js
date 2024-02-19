const { Schema, model, Types } = require('mongoose');

<<<<<<< HEAD
const UsuarioHasCursoSchema = Schema ({
=======
const UsuarioHasCursoSchema = Schema({
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
    estudiante: {
        type: Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Estudiante obligatorio']
    },
    curso: {
        type: Types.ObjectId,
        ref: 'Curso',
        required: [true, 'Curso obligatorio']
    },
<<<<<<< HEAD
    fecha_inscripcion:{
        type: Date,
        default: Date.now()
    },
    estado:{
=======
    fecha_inscripcion: {
        type: Date,
        default: Date.now()
    },
    estado: {
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
        type: Boolean,
        default: true
    }
});

module.exports = model('UsuarioHasCurso', UsuarioHasCursoSchema);