//Importa o pacote express
const express = require('express');

//Importa a tabela de Brinquedos 
const modelBrinquedo = require('../model/modelBrinquedos');

//gerenciador de rotas para o express
const router = express.Router();

//rotas de cadastro de dados do brinquedo
router.post('/cadastrarDados', (req, res)=>{
    console.log(req.body);
    
    let {nome_brinquedo, modelo_brinquedo} = req.body;
    modelBrinquedo.create(
        //dados de inserção
        {nome_brinquedo, modelo_brinquedo}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"BRINQUEDO INSERIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR O BRINQUEDO.",
                errorObject:error
            });
        }
    );
     // res.send('ROTA DE CADASTRO DE DADOS!');

});

//rota de listagem simples
router.get('/listarDados', (req, res)=>{

    modelBrinquedo.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"BRINQUEDOS LISTADOS COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR OS BRINQUEDOS.",
                    errorObject:error
                });
            }
        );

//res.send('ROTA DE LISTAGEM DE DADOS!');

});

//listagem por cod_brinquedo
router.get('/listarDadosPK/:cod_brinquedo', (req, res)=>{

    //declarar e receber dados
    let {cod_brinquedo} = req.params;

    //ação do sequelize
    modelBrinquedo.findByPk(cod_brinquedo)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"BRINQUEDO RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O BRINQUEDO.",
                errorObject:error
            });
        }
    )

});

//rota de listagem por nome_brinquedo
router.get('/listarDadosNOME/:nome_brinquedo', (req, res)=>{

    let {nome_brinquedo} = req.params;

    modelBrinquedo.findOne({attributes:['cod_brinquedo', 'nome_brinquedo'],where:{nome_brinquedo}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"BRINQUEDO RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O BRINQUEDO.",
                errorObject:error
            });
        }
    )

});

//rotas de alteração do brinquedo
router.put('/alterarDados', (req, res)=>{

    const {cod_brinquedo, nome_brinquedo} = req.body;

    modelBrinquedo.update(
        {nome_brinquedo},
        {where:{cod_brinquedo}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"BRINQUEDO ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR O BRINQUEDO.",
                errorObject:error
            });
        }
    );
    
//res.send('ROTA DE ALTERAÇÃO DE DADOS!');

});

//rota de exclusão do brinquedo
router.delete('/excluirDados/:cod_brinquedo', (req, res)=>{
    console.log(req.params);
    let {cod_brinquedo} = req.params

    modelBrinquedo.destroy(
        {where:{cod_brinquedo}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"BRINQUEDO EXCLUIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O BRINQUEDO.",
                errorObject:error
            });
        }
    );

//res.send('ROTA DE EXCLUSÃO DE DADOS!');

});

module.exports = router;