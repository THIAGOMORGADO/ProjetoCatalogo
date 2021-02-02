//criando dialeto de conexao com banco de dados (docker)
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'db-catalogo',
    define:{
      timestamps: true,
      underscored: true,
  },
};