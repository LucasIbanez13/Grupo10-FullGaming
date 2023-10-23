'use strict';
const productsJSON = require('../../data/items.json')

const product = productsJSON.map(({  name, model, description, price, discount, brandId, imageId, statusId, categoryId, }) => {
  return {
    name,
    model,
    description,
    price,
    discount,
    brandId,    
    statusId,
    categoryId,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', product, {});
  },

  async down(queryInterface, Sequelize) {
    // Código para revertir la inserción si es necesario
  }
};