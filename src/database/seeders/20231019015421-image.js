'use strict';
const productsJSON = require('../../data/items.json')

const product = productsJSON.map(({ image }) => {
  return {
    imagePrimary : image,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', product, {});
  },

  async down(queryInterface, Sequelize) {
    // Código para revertir la inserción si es necesario
  }
};