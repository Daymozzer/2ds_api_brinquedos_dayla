//pacote express
const express = require('express');

const routesBrinquedo = require('./route/routesBrinquedo');
const routesClientes = require ('./route/routesClientes')


//torna o express executavel dentro do script
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//execução
app.use('/', routesBrinquedo);
app.use('/', routesClientes);



//Criação do webserver recebendo as requisições
app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});