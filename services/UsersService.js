const boom = require('@hapi/boom');
// const conn = require('../libs/postgres');
const pool = require('../libs/postgresPool');

class UsersService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) =>{
      console.log(err);
    });
  }

  async create(data) {

    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const response = await pool.query(query);
    return response.rows;
  }

  async findOne(id) {
    return id;
  }

  async update(id, changes) {
    return changes;
  }

  async delete(id) {

    return { id };
  }
}

module.exports = UsersService;
