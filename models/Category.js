const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    //added id tags for the table
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //added the price collom to for the table
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //added the collomn for the stock of the products
    stock:{
      type: DataTypes.INTEGER,
      allowNull: true,      
    },
    //dont think I should need anything else so i am not going to
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
