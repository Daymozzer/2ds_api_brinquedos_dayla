//Importa o pacote express
const express = require('express');

//Importa a tabela de Carros
const modelBrinquedos = require('../model/modelBrinquedos');

//gerenciador de rotas para o express
const router = express.Router();

//rotas de crud de categoria
router.post('/cadastrarDados', (req, res)=>{
    res.send('ROTA DE CADASTRO DE DADOS!');
});


router.get('/listarDados', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE DADOS!');
});

router.put('/alterarDados', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO DE DADOS!');
});

router.delete('/excluirDados', (req, res)=>{
    res.send('ROTA DE EXCLUSÃO DE DADOS!');
});

module.exports = router;