const express = require('express');

const routes = require('./route/routesBrinquedo');

const app = express();

app.use('/', routes);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});