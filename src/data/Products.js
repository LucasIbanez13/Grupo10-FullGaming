const { v4: uuidv4 } = require('uuid');

const Product = function({id,category,image,name,brand,model,stock,description,price,discount,amountDues,cards,shipment,location,message}){
    this.id = uuidv4();
    this.category = category;
    this.image = image;
    this.name = name;
    this.brand = brand;
    this.model = model;
    this.stock = stock;
    this.description = description
    this.price = +price;
    this.discount = +discount;
    this.amountDues = amountDues;
    this.cards = cards
    this.shipment = shipment;
    this.location = location;
    this.message = "Comprar ahora";
}


module.exports = Product