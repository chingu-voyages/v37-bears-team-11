/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('menu_items', (table)=>{
      table.integer('item_id')
      table.foreign('item_id').references('id').inTable('items').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('menu_items', (table)=>{
        table.dropColumn('item_id')
    })
  
};
