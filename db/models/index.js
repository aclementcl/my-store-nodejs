const { USER_TABLE, UserSchema, User } = require('./user.model');
const { CUSTOMER_TABLE, CustomerSchema, Customer } = require('./customer.model');
const { PRODUCT_TABLE, ProductSchema, Product } = require('./product.model');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));

  Customer.associate(sequelize.models);
}

module.exports = setupModels;
