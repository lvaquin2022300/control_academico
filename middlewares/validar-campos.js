const { validationResult } = require('express-validator');
<<<<<<< HEAD
const mongoose = require('mongoose');
const Usuario = require('../models/usuario')

const validarCampos = (req, res, next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json(error);
    }

    next();
}

const validarRolTeacher = async (req, res, next) => {
    const { maestro } = req.body;

    try {
        const existeUsuario = await Usuario.findById(maestro);

        if (!existeUsuario) {
            return res.status(400).json({
                msg: 'El ID del usuario proporcionado no existe'
            });
        }

        if (existeUsuario.role === "TEACHER_ROLE") {
            req.body.role = "TEACHER_ROLE";
            next();
        } else {
            return res.status(400).json({
                msg: 'Un estudiante no puede modificar cursos o eliminarlos'
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: 'Error interno del servidor'
        });
    }
};

module.exports = {
    validarCampos,
    validarRolTeacher
=======

const validarCampos = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json(error);
    }
    next();
}

module.exports = {
    validarCampos
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
}