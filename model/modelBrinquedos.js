//importa o pacote sequelize
const Sequelize = require('sequelize');

//conexão com o BD
const connection = require('../database/database');

//criação das tabelas
const modelBrinquedo = connection.define(
    'tbl_brinquedo',
    {
        cod_brinquedo:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nome_brinquedo:{
            type: Sequelize.STRING(200),
            allowNull: false
        },
        modelo_brinquedo:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

//modelBrinquedo.sync({force:true});

module.exports = modelBrinquedo;