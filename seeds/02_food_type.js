/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'kibble', description: "dry, dull, boring"},
    {id: 2, name: 'live feed', description: "gross, gross"},
    {id: 3, name: 'seed', description: "good for birds"}
  ]);
};
