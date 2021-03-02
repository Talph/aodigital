const { Model, DataTypes } = require('sequelize');

class Email extends Model {
  static init(sequelize) {
    super.init({
      name__: DataTypes.STRING,
      surname__: DataTypes.STRING,
      email__: DataTypes.STRING,
      company__name_: DataTypes.STRING,
      contact__message_: DataTypes.STRING,
      terms: DataTypes.BOOLEAN
    }, {
      sequelize
    })
  }
}

module.exports = Email;