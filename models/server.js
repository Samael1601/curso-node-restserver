const express = require('express');
const cors = require('cors')
const app = express();

class Server {


    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares: Funciones que van a añadirle otra funcionalidad a mi webserver
        this.middlewares();
        //Rutas de mi aplicacion

        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        // Parseo y lectura del body
        this.app.use(express.json());


        //Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));

        // this.app.get('/api', (req, res) => {
        //     // res.status(403).json({
        //     //     msg: 'get API'
        //     // });
        //     res.json({
        //         msg: 'get API'
        //     });
        // });
        // this.app.put('/api', (req, res) => {
        //     res.status(400).json({
        //         msg: 'put API'
        //     });
        // });
        // this.app.post('/api', (req, res) => {
        //     res.status(201).json({
        //         msg: 'post API'
        //     });
        // });
        // this.app.delete('/api', (req, res) => {
        //     res.json({
        //         msg: 'delete API'
        //     });
        // });
        // this.app.patch('/api', (req, res) => {
        //     res.json({
        //         msg: 'patch API'
        //     });
        // });

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;