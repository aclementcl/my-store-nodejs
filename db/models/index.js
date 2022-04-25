const { USER_TABLE, UserSchema, User } = require('./userModel');
const { PRODUCT_TABLE, ProductSchema, Product } = require('./productModel');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;
