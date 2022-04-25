const boom = require('@hapi/boom');
// const conn = require('../libs/postgres');
// const pool = require('../libs/postgresPool');
const { models } = require('../libs/sequelize');

class UsersService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('error', (err) => {
    //   console.log(err);
    // });
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    // const query = 'SELECT * FROM tasks';
    // const response = await pool.query(query);
    // return response.rows;
    const response = await models.User.findAll();
    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('El usuario no existe');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const response = await user.update(changes);
    return response;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UsersService;
