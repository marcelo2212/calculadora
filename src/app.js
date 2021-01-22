'use strict';

const bodyParse = require('body-parser');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Calculadora Metros Quadrados',
            version: '0.0.2'
        },
    },
    apis:['./src/routes/*.js']
};

const swaggerSpec = swaggerJsDoc(options);

const router = express.Router();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

const usuarioRoutes = require('./routes/indexRoutes');


app.use('/', usuarioRoutes);
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use((error,req, res, next) =>{
    res.status(error.httpStatusCode).json('error'+ error);
});

module.exports = app;