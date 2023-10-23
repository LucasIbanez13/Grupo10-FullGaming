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
        as : "image",
        foreignKey : "productId"
      });
      Product.belongsTo(models.Category,{
        as: "category",
        foreignKey : "categoryId"
      })// define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,    
    statusId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};