'use strict';

const fs = require("fs");
const ini = require("ini");

const axios = require('axios');

const config = ini.parse(fs.readFileSync('src/config/config.ini', 'utf-8'));

exports.findPrecoMetroQuadrado = async () =>{
    try {
        const response = await axios.get(config.URL_INTEGRACAO);
        return response.data.precoMetroQuadrado;
      } catch (error) {
         return 'erro ao consultar a API de precificação: ' + error.message;
      }
}