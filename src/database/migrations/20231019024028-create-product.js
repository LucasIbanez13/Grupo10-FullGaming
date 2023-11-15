'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      model: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT,
        defaultValue: 0
      },
      price: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      discount: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0
      },
      image: {
        type: Sequelize.STRING,
      },
      brandId: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references : {
          model : {
            tableName: 'Brands'
          }
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Categories'
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
    await queryInterface.dropTable('Products');
  }
};