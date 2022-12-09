// importa o pacote do express
const express = require('express');

// importa a tabela de cliente
const modelClientes = require('../model/modelClientes');

//gerenciador de rotas para express
const router = express.Router();

//rotas de crud de dados do cliente
router.post('/cadastrarDados', (req, res)=>{
    console.log(req.body);
    
    let {nome_cliente} = req.body;
    modelClientes.create(
        //dados de inserção
        {nome_cliente}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE INSERIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR O CLIENTE.",
                errorObject:error
            });
        }
    );
     // res.send('ROTA DE CADASTRO DE DADOS!');

});

//rota de listagem simples do cliente
router.get('/listarDados', (res)=>{

    modelClientes.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"CLIENTES LISTADOS COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR OS CLIENTES.",
                    errorObject:error
                });
            }
        );

//res.send('ROTA DE LISTAGEM DE DADOS!');

});

//listagem por cod_cliente
router.get('/listarDadosPK/:cod_cliente', (req, res)=>{

    //declarar e receber dados
    let {cod_cliente} = req.params;

    //ação do sequelize
    modelClientes.findByPk(cod_cliente)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O CLIENTE.",
                errorObject:error
            });
        }
    )

});

//rota de listagem por nome_cliente
router.get('/listarDadosNOME/:nome_cliente', (req, res)=>{

    let {nome_cliente} = req.params;

    modelClientes.findOne({attributes:['cod_cliente', 'nome_cliente'],where:{nome_cliente}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O CLIENTE.",
                errorObject:error
            });
        }
    )

});

//rotas de alteração do cliente
router.put('/alterarDados', (req, res)=>{

    const {cod_cliente, nome_cliente} = req.body;

    modelClientes.update(
        {nome_cliente},
        {where:{cod_cliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR O CLIENTE.",
                errorObject:error
            });
        }
    );
    
//res.send('ROTA DE ALTERAÇÃO DE DADOS!');

});

//rota de exclusão do cliente
router.delete('/excluirDados/:cod_cliente', (req, res)=>{
    console.log(req.params);
    let {cod_brinquedo} = req.params

    modelClientes.destroy(
        {where:{cod_brinquedo}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE EXCLUIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O CLIENTE.",
                errorObject:error
            });
        }
    );

//res.send('ROTA DE EXCLUSÃO DE DADOS!');

});

module.exports = router;