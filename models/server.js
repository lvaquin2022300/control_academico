const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const { dbConnection } = require('../db/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.cursosPath = '/api/cursos';
        this.estudiantesPath = '/api/Asigancion_estudiantes';

        this.conectarDB();

        this.middlewares();

        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
        this.app.use(this.cursosPath, require('../routes/cursos.routes'));
        this.app.use(this.estudiantesPath, require('../routes/usuarioHasCurso.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutado y escuchando en el puerto', this.port);
=======
const { dbConnection } = require('../db/config');//se desestructura para traer solo lo que necesitamos
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.estudiantesPath = '/api/estudiantes'
        this.conectarDB();
        this.middlewares();//loos middlewares, permite validar si cumple los requisitos antes de enviarla al controlador
        this.routes();
        this.routesEstudiante();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(express.static('public'));//este es contenido estatico que se va a servir/mostrar. sirve para proteger las demás rutas
        this.app.use(cors());//configurar que se pueda acceder desde cualquier lado
        this.app.use(express.json());
    }
    //cors policy, son listas blancas o negras de los navegadores en los que va a correr la app

    routes() {
        this.app.use(this.estudiantesPath, require('../routes/estudiante.routes'));
    }
    routesEstudiante() {
        this.app.use(this.estudiantesPath, require('../routes/estudiante.routes'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutado y escuchado en el puerto ' + this.port);
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
        });
    }
}

<<<<<<< HEAD

module.exports = Server;
=======
module.exports = Server;
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
