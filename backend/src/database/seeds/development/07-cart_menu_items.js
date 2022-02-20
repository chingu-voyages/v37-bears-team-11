/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cart_menu_items').del()
  await knex('cart_menu_items').insert([
    {id:1, user_id: 4, menu_item_id: 2, quantity: 2}
  ]);
};
