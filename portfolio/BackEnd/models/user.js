'use strict';
const {Sequelize,DataTypes, database} = require('./connexion');

const User = database.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    Sequelize,
    modelName: 'User',
    underscored: false,
    paranoid: false
    }
);

module.exports = User;