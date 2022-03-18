//set environment using .env file
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

//point variable to value of connection string in env file
const { CONNECTION_STRING_LOCAL, CONNECTION_STRING_DEVELOPMENT, CONNECTION_STRING_PRODUCTION } = process.env

/**
 * Knex config object
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
    local: {
        client: 'pg',
        connection: CONNECTION_STRING_LOCAL,
        migrations: {
            directory: './src/database/migrations',
        },
        seeds: {
            directory: './src/database/seeds/development',
        },
    },
    development: {
        client: 'pg',
        connection: CONNECTION_STRING_DEVELOPMENT,
        migrations: {
            directory: './src/database/migrations',
        },
        seeds: {
            directory: './src/database/seeds/development',
        },
    },

    staging: {
        client: 'pg',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    production: {
        client: 'pg',
        connection: CONNECTION_STRING_PRODUCTION,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: './src/database/migrations',
        },
    },
}
