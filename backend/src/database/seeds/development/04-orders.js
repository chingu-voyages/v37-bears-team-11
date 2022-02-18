/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('orders').insert([
    {id: 1, user_id: 2, paid: false, status: "ready", food_truck_id: 1, datetime_order_placed: new Date()},
    {id: 2, user_id: 5, paid: false, status: "accepted", food_truck_id: 2, datetime_order_placed: new Date()},


  ]);
};
