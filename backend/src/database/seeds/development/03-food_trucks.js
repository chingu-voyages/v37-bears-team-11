/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_trucks').del()
  await knex('food_trucks').insert([
    {id: 1, name: 'Hit the Road', phone: "7861234567", hours: "12-5", user_id: 1, address_id: 1 },
    {id: 2, name: 'Fast Foods', phone: "8888888888", hours: "10-3", user_id: 3, address_id: 3 },
  ]);
};
