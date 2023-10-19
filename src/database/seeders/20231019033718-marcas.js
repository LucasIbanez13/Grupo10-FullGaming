'use strict';
const brandsJSON = require('../../data/marcas.json')
const brands = brandsJSON.map(({name,image})=>{
  return{
    name,
    image,
    createdAt : new Date(),
    updatedAt : new Date()
  }  

  
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Brands', brands, {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
