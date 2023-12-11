'use strict';
const usuariosJSON = require('../../data/user.json');

const usuarios = usuariosJSON.map(({ name, email, pass, surname, image, phone, dni, street, floor, province, streetHeight, rol, location }) => {
  return {
    name: name,  
    email: email,
    password: pass, 
    surname: surname, 
    image: image, 
    phone: phone || null, // Puede ser nulo
    dni: dni || null, // Puede ser nulo
    street: street || null, // Puede ser nulo
    floor: floor || null, // Puede ser nulo
    province: province || null, // Puede ser nulo
    location: location || null, // Puede ser nulo
    streetHeight: streetHeight || null, // Puede ser nulo
    rolId: rol,
    createdAt: new Date(),
    updatedAt: new Date()
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', usuarios,
    {});
  },

  async down(queryInterface, Sequelize) {
    // Código para revertir la inserción si es necesario
  }
};