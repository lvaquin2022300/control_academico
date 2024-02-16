const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { existeUsuarioById } = require('../helpers/db-validator');
const {
    estudiantesGet,
    estudiantesPost } = require('../controllers/estudiante.controller');
const { model } = require('mongoose');
const router = Router();
router.get("/", estudiantesGet);
router.post(
    "/", [
    check("nombre", "El nombre de la mascota es obligatorio").not().isEmpty(),
    check("apellido", "El apellido es obligatorio").not().isEmpty(),
    check("curso", "El curso es obligatorio").not().isEmpty(),
    check("correo", "El correo es obligatorio").not().isEmpty(),
    check("Password", "La contrasena es obligatorio").not().isEmpty(),
    validarCampos
], estudiantesPost);

module.exports = router;