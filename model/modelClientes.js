//importa o pacote sequelize
const Sequelize = require('sequelize');

//conexão com o BD
const connection = require('../database/database');

//criação das tabelas
const modelClientes = connection.define(
'tbl_cientes',
 {
 
cpf_cliente:{
type: Sequelize.INTEGER,

 },
 nome_cliente:{
type: Sequelize.STRING(60),
allowNull: false
   },
 telefone_cliente:{
 type: Sequelize.DECIMAL(20),
allowNull: false
 },
 email_cliente:{
 type: Sequelize.STRING(45),
 allowNull: false
},
}
)

//modelClientes.sync({force:true});

module.exports = modelClientes;