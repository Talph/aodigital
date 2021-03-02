const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Email = require('../models/Email');

const connection = new Sequelize(dbConfig);

Email.init(connection);

module.exports = connection;