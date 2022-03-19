/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('menu_items').del()
  await knex('menu_items').insert([
    {id: 1, food_truck_id: 1, item_id: 2, price: 10},
    {id: 2, food_truck_id: 2, item_id: 1, price: 12},
  ]);
};
