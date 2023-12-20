'use strict';
const statusesJSON = ["open","close"]

const statuses = statusesJSON.map((status) => {
  return {
    name:status,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Statuses', statuses, {});//primer valor es nombre de tabla, segundo valor es con los datos q se llena la tabla en este caso la const categorie

  },

  async down(queryInterface, Sequelize) {
    

     await queryInterface.bulkDelete('Statuses', null, {});

  }
};
