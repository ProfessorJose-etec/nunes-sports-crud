const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nunes_sports', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
