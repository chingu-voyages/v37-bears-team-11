/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
	return knex.schema.createTable("menu_items", (table) => {
		table.increments("id").primary();
		table.integer("food_truck");
		table
			.foreign("food_truck")
			.references("id")
			.inTable("food_trucks")
			.onDelete("cascade");
		table.string("name").notNullable();
		table.integer("price").notNullable();
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("menu_items");
};
