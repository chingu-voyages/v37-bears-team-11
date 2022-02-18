require('dotenv').config()
const path = require('path');

const {DATABASE_URL_DEVELOPMENT} = process.env
console.log(DATABASE_URL_DEVELOPMENT)
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: DATABASE_URL_DEVELOPMENT,


    migrations: {
      directory: './src/database/migrations'
    },
    seeds:{
      directory: './src/database/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
