/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
	return knex.schema.createTable("cart_menu_items", (table) => {
		table.increments("id").primary();
		table.integer("user");
		table
            .foreign("user")
            .references("id")
            .inTable("users")
            .onDelete("cascade");
		table.integer("food_truck");
		table
			.foreign("food_truck")
			.references("id")
			.inTable("food_trucks")
			.onDelete("cascade");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("cart_menu-items");
};
