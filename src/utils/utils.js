'use strict';


/**
 * Função para verificar se o valor é vazio,
 * ou não é maior do que 10.000
 * 
 */
exports.inputIsValid = (value) =>{
    
    if(isNaN(value))
        return false;

    if(value > 10000 || value < 1)
        return false;

    return true;
}
