const { Schema, model } = require('mongoose');

const estudianteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    curso: {
        type: String,
        required: [true, 'El curso es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    pasword: {
        type: String,
        required: [true, 'La clave es obligatoria']
    },
    role: {
        type: String,
        required: true,
        enum: ["STUDENT_ROLE"]
    }
});

module.exports = model('Estudiante', estudianteSchema);