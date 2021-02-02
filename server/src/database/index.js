const sequelize = require('sequelize');
// Puxando lib para conexao ao banco de dados
const Sequelize  = require('sequelize');
const dbConfig = require('../config/database');

// Instaciando objetao de conexao ao banco de dados
const database = new Sequelize(dbConfig);

module.exports = database;