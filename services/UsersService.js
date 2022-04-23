const boom = require('@hapi/boom');
const conn = require('../libs/postgres');

class UsersService {
  constructor() {
  }

  async create(data) {

    return data;
  }

  async find() {
    const client = await conn();
    const response = await client.query('SELECT * FROM task');
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
