//set environment
const environment = process.env.NODE_ENV || "development";
//import environment settings from knexfile.js
const configuration = require("../../knexfile")[environment];
/**
 * pass environment setting to knex module function which establishes
 * the appropriate database connection
 */
const knex = require("knex")(configuration);

module.exports = knex;
