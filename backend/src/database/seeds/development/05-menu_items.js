/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('menu_items').del()
  await knex('menu_items').insert([
    {id: 1, food_truck_id: 1, name: "hamburger", price: 10},
    {id: 2, food_truck_id: 2, name: "pizza", price: 12},
  ]);
};
