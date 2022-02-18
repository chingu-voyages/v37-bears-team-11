/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * exports.up function specifies the 
 * commands to run to make changes to the database
 */
 
exports.up = function(knex) {
    return knex.schema.createTable('users', (table)=>{
        table.increments('id').primary()
        table.string('username').notNullable()
        table.string('password').notNullable()
        table.string('email').notNullable()
        table.string('phone').notNullable()
        table.integer('address_id')
        table.boolean('is_operator').notNullable()
        table.string('first_name').notNullable()
        table.string('last-name').notNullable()
        table.timestamps(true, true);

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * exports down function specifies the commands to undo the 
 * changes the export.up function made to the table.
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
