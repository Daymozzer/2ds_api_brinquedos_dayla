const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelCarro = connection.define(
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

//modelCategoria.sync({force:true});

module.exports = model;