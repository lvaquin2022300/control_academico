const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos, validarRolTeacher } = require('../middlewares/validar-campos');
<<<<<<< HEAD
const { existeCursoById, existeCursoByNombre} = require('../helpers/db-validators');
=======
const { existeCursoById, existeCursoByNombre } = require('../helpers/db-validators');
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3

const { cursosPost, cursosGet, getCursoByid, cursosPut, cursosDelete } = require('../controllers/cursos.controller');

const router = Router();

router.get("/", cursosGet);

router.get(
    "/:id",
    [
<<<<<<< HEAD
        check("id","El id no es un formato válido de MongoDB").isMongoId(),
=======
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
        check("id").custom(existeCursoById),
        validarCampos
    ], getCursoByid);

router.put(
    "/:id",
    [
<<<<<<< HEAD
        check("id","El id no es un formato válido de MongoDB").isMongoId(),
=======
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
        check("id").custom(existeCursoById),
        validarCampos,
        validarRolTeacher
    ], cursosPut);

router.delete(
<<<<<<< HEAD
        "/:id",
        [
            check("id","El id no es un formato válido de MongoDB").isMongoId(),
            check("id").custom(existeCursoById),
            validarCampos,
            validarRolTeacher
        ], cursosDelete);

        
router.post(
    "/", 
    [
        check("nombre","El nombre es obligatorio").not().isEmpty(),
        check("nombre").custom(existeCursoByNombre),
        check("maestro","Debes escribir tu correo, no tu usuario").isEmail(),
        validarCampos
    ], cursosPost); 
=======
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeCursoById),
        validarCampos,
        validarRolTeacher
    ], cursosDelete);


router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("nombre").custom(existeCursoByNombre),
        check("maestro", "Debes escribir tu correo, no tu usuario").isEmail(),
        validarCampos
    ], cursosPost);
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3

module.exports = router;