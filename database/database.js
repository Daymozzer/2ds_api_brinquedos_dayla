const Sequelize = require('sequelize');

const connection = new Sequelize(
        'bd_brinquedos_api', 
        'root',
        '',
        {
            host:'localhost',
            dialect:'mysql',
            timezone: '-03:00',
            port: '3307'
        }
    );

module.exports = connection;