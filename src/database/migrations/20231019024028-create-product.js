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
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      brandId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Brands'
          }
        }
      },
      imageId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Images'
          }
        }
      },
      statusId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Statuses'
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