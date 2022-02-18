/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('addresses', (table)=>{
        table.increments('id').primary()
        table.string('street').notNullable()
        table.string('city').notNullable()
        table.string('state').notNullable()
        table.string('country').notNullable()
        table.timestamps(true, true);

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('addresses')
};
