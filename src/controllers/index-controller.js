'use strict';
const util = require('../utils/utils');
const service = require('../service/index-service');


/**
 *  FUNÇÃO RESPONSÁVEL POR REALIZAR O CÁLCULO DO METRO QUADRADO DE UM IMÓVEL
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.calcularMetroQuadrado = async (req, res, next) => {

    try {
        if (util.inputIsValid(req.params.metroQuadrado)) {
            let retornoPreco = await service.findPrecoMetroQuadrado();
            if(!isNaN(retornoPreco)){
                res.status(200).send({
                    valorImovel: parseFloat((retornoPreco * req.params.metroQuadrado).toFixed(2))
                });
            }else{
                res.status(400).send({message: retornoPreco});    
            }
        } else {
            res.status(401).send({error: 'Valor inválido.'});
        }
    } catch (error) {
        res.status(503).send(error);
    }

}