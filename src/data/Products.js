const { v4: uuidv4 } = require('uuid');

const Product = function({id,category,marca,estado,garantia,cuotas,cantidades,cards,envio,name,image,description,others,price,discount}){
    this.id = uuidv4();
    this.category = category;
    this.marca = marca;
    this.estado = estado;
    this.garantia = garantia;
    this.cuotas = cuotas;
    this.cantidades = +cantidades
    this.cards = cards;
    this.envio = envio;
    this.name = name;
    this.image = image
    this.description = description
    this.others = others;
    this.price = +price;
    this.discount = +discount;
}

module.exports = Product