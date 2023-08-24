const { v4: uuidv4 } = require('uuid');

const Product = function({name,price,discount,description,image,category}){
    console.log(name);
    this.id = uuidv4();
    this.category = category.trim();
    this.marca = marca.trim();
    this.estado = estado.trim();
    this.garantia = garantia.trim();
    this.cuotas = cuotas.trim();
    this.cantidades = +cantidades
    this.cards = cards.trim();
    this.envio = envio.trim();
    this.name = name.trim();
    this.image = null
    this.description = description.trim()
    this.others = others.trim();
    this.price = +price;
    this.discount = +discount;
}

module.exports = Product