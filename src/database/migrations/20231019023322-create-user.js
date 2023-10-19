'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      dni: {
        type: Sequelize.INTEGER
      },
      street: {
        type: Sequelize.STRING
      },
      floor: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      streetHeight: {
        type: Sequelize.INTEGER
      },
      rolId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Rols'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};