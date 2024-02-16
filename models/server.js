const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');//se desestructura para traer solo lo que necesitamos
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.estudiantesPath = '/api/estudiantes';
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
        });
    }
}

module.exports = Server;