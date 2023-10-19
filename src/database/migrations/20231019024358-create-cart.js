'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      date: {
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,      
          references : {
            model : {
              tableName: 'Users'
            }
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Products'
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
    await queryInterface.dropTable('Carts');
  }
};