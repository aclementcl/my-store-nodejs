const { USER_TABLE, UserSchema, User } = require('./user.model');
const { PRODUCT_TABLE, ProductSchema, Product } = require('./product.model');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;
