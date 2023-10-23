'use strict';
const usuariosJSON = require('../../data/user.json');

const usuarios = usuariosJSON.map(({ name, email, pass, surname, image, phone, dni, street, floor, province, streetHeight, rolId }) => {
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
    streetHeight: streetHeight || null, // Puede ser nulo
    rolId: rolId,
    createdAt: new Date(),
    updatedAt: new Date()
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        name : "juan",
        surname : "vega",
        email : "admin@gmail.com",
        password : "$2a$10$dMDoDsb9v//2be/qTBtfXeJ2y.kukqvUcv9Wo25aY8xRX28YdpGzK",
        image : "1696023325117_products_.jpeg",
        rolId : 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name : "lucas",
        surname : "ibanez",
        email : "user@gmail.com",
        password : "$2a$10$dMDoDsb9v//2be/qTBtfXeJ2y.kukqvUcv9Wo25aY8xRX28YdpGzK",
        image : "1696023325117_products_.jpeg",
        rolId : 2,
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ],
    
    
    {});
  },

  async down(queryInterface, Sequelize) {
    // Código para revertir la inserción si es necesario
  }
};