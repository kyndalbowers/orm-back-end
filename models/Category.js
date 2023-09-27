const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// model imports
const Product = require('./Product');
const ProductTag = require('./ProductTag');

Category.hasMany(models.Product, {
  foreignKey: 'category.id',
});

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// model association
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// export
module.exports = Category;
