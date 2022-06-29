const { USER_TABLE, UserSchema, User } = require('./user.model');
const { CUSTOMER_TABLE, CustomerSchema, Customer } = require('./customer.model');
const { PRODUCT_TABLE, ProductSchema, Product } = require('./product.model');
const { CATEGORY_TABLE, CategorySchema, Category } = require('./category.model');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
}

module.exports = setupModels;
