'use strict';

const axios = require('axios');

exports.findPrecoMetroQuadrado = async () =>{
    try {
        const response = await axios.get('http://localhost:3100');
        return response.data.precoMetroQuadrado;
      } catch (error) {
         return 'erro ao consultar a API de precificação: ' + error.message;
      }
}