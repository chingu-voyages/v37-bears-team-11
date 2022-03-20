/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {id: 1, name: 'pizza'},
    {id: 2, name: 'hamburger'},
  ]);
};
