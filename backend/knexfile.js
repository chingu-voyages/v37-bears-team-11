//set environment using .env file
require("dotenv").config({ path: __dirname + "/.env" });

//point variable to value of connection string in env file
const { CONNECTION_STRING_DEVELOPMENT } = process.env;

/**
 * Knex config object
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
	development: {
		client: "pg",
		connection: CONNECTION_STRING_DEVELOPMENT,
		migrations: {
			directory: "./src/database/migrations",
		},
		seeds: {
			directory: "./src/database/seeds/development",
		},
	},

	staging: {
		client: "pg",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
	production: {
		client: "pg",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};
