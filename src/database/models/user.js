'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    surname: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo
    },
    image: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      allowNull: true // Puede ser nulo
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: true, // Puede ser nulo
    },
    street: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo
    },
    floor: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo
    },
    streetHeight: {
      type: DataTypes.INTEGER,
      allowNull: true, // Puede ser nulo
    },
    rolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};