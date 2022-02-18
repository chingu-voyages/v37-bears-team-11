/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user', (table)=>{
        table.increments('id').primary()
        table.string('username').notNullable()
        table.string('password').notNullable()
        table.string('email').notNullable()
        table.string('phone').notNullable()
        table.integer('address_id')
        table.boolean('is_operator').notNullable()
        table.string('first_name').notNullable()
        table.string('last-name').notNullable()

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
