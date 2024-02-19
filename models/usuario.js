<<<<<<< HEAD
const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema ({
=======
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
    nombre: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'Correo obligatorio']
    },
    password: {
        type: String,
        required: [true, 'Password obligatorio']
    },
<<<<<<< HEAD
    img:{
        type: String
    },
    role:{
=======
    img: {
        type: String
    },
    role: {
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
        type: String,
        required: true,
        enum: ["STUDENT_ROLE", "TEACHER_ROLE"],
        default: "STUDENT_ROLE"
    },
<<<<<<< HEAD
    estado:{
=======
    estado: {
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
        type: Boolean,
        default: true
    }
});

<<<<<<< HEAD
UsuarioSchema.methods.toJSON = function(){
    const { __v, password, _id, ...usuario} = this.toObject();
=======
UsuarioSchema.methods.toJSON = function () {
    const { __v, password, _id, ...usuario } = this.toObject();
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
    usuario.uid = _id;
    return usuario;
}

module.exports = model('Usuario', UsuarioSchema);