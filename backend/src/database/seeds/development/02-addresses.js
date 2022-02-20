/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('addresses').del()
  await knex('addresses').insert([
    {id: 1, street: '190 NE 3rd St', city: "Miami", state: "Florida", country: "USA", zip: "33132"},
    {id: 2, street: '50 NE 9th St', city: "Miami", state: "Florida", country: "USA", zip: "33132"},
    {id: 3, street: '40 NE 8th St', city: "Miami", state: "Florida", country: "USA", zip: "33130"},
    {id: 4, street: '2625 3rd Ave', city: "Miami", state: "Florida", country: "USA", zip: "33129"},
    {id: 5, street: '2699 S Bayshore Dr', city: "Miami", state: "Florida", country: "USA", zip: "33133"},
  ]);
};
