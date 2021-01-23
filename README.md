# calculadora
Sumario:
  API para calcular o valor do imóvel.
 
 <h4>Descrição</h4>
  A API de calculadora serve para retornar o valor de um imóvel a partir da quantidade de metros quadrados.
  
  <h4>Estrutura</h4>
    
    A estrutura do projeto contém o seguinte fluxo
      
      - Dockerfile:
        Arquivo com as configurações do container Docker para ser executado
      
      - .dockerignore:
        Arquivo para ignorar jogar para o container do Docker a pasta node_modules
      
      - Pasta Test:
        Pasta contém os arquivos de testes unitários utilizando o framework Mocha
      
      -Pasta Bin:
        Pasta que contém o arquivo index.js para inicializar o serviço da API
       
       - SRC:
        pasta contém todo o código fonte da API a partir das subpastas e arquivos
          
          - Controllers
            Pasta contém todos os arquivos controladores de cada end-point da API
          
          - routes
            Pasta contém todos os arquivos de rotas da API, e com os comentários do Swagger para geração de documentos
          
          - Utils
            Pasta que contém o arquivo utils.js, funções públicas utilizado em toda API
            
          - Service
            Pasta que contém os arquivos que consultam dados de outras APIs
            
          - Config
            Pasta que contém todos os arquivos de configuração
          
          - app.js
            Arquivo responsável por instanciar todas as configurações da API, e instanciar as rotas da API
            
  <h4>Scripts de execução</h4>
  
    - npm start: Inicializa a API com o uso do framework nodemon para o desenvolvimento
    
    - docker build -t precificacao/dockernode . : Cria, e faz o build da API em um container no docker
    
    - docker run -p 3100:3100 -d marcelo2g/dockernode : executa o container no docker
    
    - docker-compose up: Comando que executa o container, e atualiza o código da máquina local para o container docker. docker-compose
    
    - npm test: comando para executar os testes unitários da API
  
  #End-point
  
    - http://{host}:{porta}/{metrosQuadrados}
      Ao ser chamado o end-point, a API retorna o valor do imóvel de acordo com o valor de metros quadrados é colocado no método get conforme exemplo
      Observação: a quantidade de metros quadrados tem que está no intervalo de 1 a 10.000 metros quadrados.
     
     - http://{host}:{porta}/api/doc/
      Ao ser chamado o end-point, é retornado a documentação da API
      
   #Status de retorno
   
    - status 200: Retorna o valor correto do preço do imóvel;
    - status 400: Valor enviado como parametro para a API é i válido;
    - Status 503: houve um erro interno na API
      
  #Dependência
  
    Para a API funcionar, precisa de uma outra API de precificacao(https://github.com/marcelo2212/precificacao) para que realize o cálculo corretamente.
