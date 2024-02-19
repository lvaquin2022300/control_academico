
const { response } = require('express');
const Estudiante = require('../models/estudiante');

const bcryptjs = require('bcryptjs');

const estudiantesGet = async (req, res = response) => {
    const { limite, desde } = req.query;
    const query = { estado: true };
    const [total, estudiantes] = await Promise.all([
        Estudiante.countDocuments(query),
        Estudiante.find(query)
            .skip(Number(desde))
            .limit(Number(limite)),
    ]);
    res.status(200).json({
        total, estudiantes
    });
}

const estudiantesPost = async (req, res) => {
    const { nombre, apellido, curso, correo, pasword } = req.body;
    const estudiante = new Estudiante({ nombre, apellido, curso, correo, pasword });
    await estudiante.save();
    res.status(200).json({
        estudiante
    });
}

module.exports = {
    estudiantesGet,
    estudiantesPost
}