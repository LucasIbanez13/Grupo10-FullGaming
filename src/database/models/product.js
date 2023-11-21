'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Brand,{
        as : "brand",
        foreignKey : "brandId"
      });
      Product.hasMany(models.Image,{
        as : "images",
        foreignKey : "productId"
      });
      Product.belongsTo(models.Category,{
        as: "category",
        foreignKey : "categoryId"
      });
      Product.hasMany(models.Stock, {
        as: 'stocks',
        foreignKey: 'productId',
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    image: DataTypes.STRING,
    brandId: DataTypes.INTEGER,    
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};