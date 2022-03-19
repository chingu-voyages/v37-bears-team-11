/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('orders_menu_items').del()
  await knex('orders_menu_items').insert([
    {id: 1, order_id: 1, menu_item_id: 1, quantity: 2},
    {id: 2, order_id: 2, menu_item_id: 2, quantity: 1},
  ]);
};
