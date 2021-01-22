const chai = require('chai');
const server = require('../bin/index');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

describe('Index', function(){

    /**
     * TESTE PARA VERIFICAR SE A CHAMADA ESTÁ RETORNANDO O STATUS 401
     */
    it('Chamada da API de calculo status 401', function(done){
        chai.request(server).get('/aws').send().end(function(err, res){
            res.should.have.status(401);
            done();
        });
    });

    /**
     * TESTE PARA VERIFICAR SE A CHAMADA ESTÁ REALIZANDO O CÁLCULO NORMAL
     */
    it('Chamada da API de calculo 200', function(done){
        chai.request(server).get('/' + 1).send().end(function(err, res){
            res.should.have.status(200);
            res.body.should.have.property('valorImovel');
            res.body.valorImovel.should.be.equal(145.3);
            done();
        });
        
    });

    /**
     * TESTE PARA VERIFICAR SE A API VAI REALIZAR O CÁLCULO DE PREÇO COM MAIS DE 10.000 METROS QUADRADOS
     */
    it('Calcular preço com mais de 10.000 metros quadrados', function(done){
        chai.request(server).get('/' + 11000).send().end(function(err, res){
            res.should.have.status(401);
            res.body.should.have.property('error');
            res.body.error.should.be.equal('Valor inválido.');
            done();
        });
    });

    /**
     * TESTE PARA VERIFICAR SE A API VAI REALIZAR O CÁLCULO DE PREÇO COM MENOS DE 1 METRO QUADRADO
     */
    it('Calcular preço com menos de 1 metro quadrados', function(done){
        chai.request(server).get('/' + 0).send().end(function(err, res){
            res.should.have.status(401);
            res.body.should.have.property('error');
            res.body.error.should.be.equal('Valor inválido.');
            done();
        });
    });
})