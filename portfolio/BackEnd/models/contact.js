'use strict';
const {Sequelize,DataTypes, database} = require('./connexion');

const Contact = database.define('Contact', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    Sequelize,
    modelName: 'Contact',
    underscored: false,
    paranoid: false
    }
);
Contact.sync();
module.exports = Contact;