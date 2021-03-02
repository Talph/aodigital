'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('email', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name__: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      surname__: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email__: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company__name_: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contact__message_: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      terms: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('email');
  }
};
