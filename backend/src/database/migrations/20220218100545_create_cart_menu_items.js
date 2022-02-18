/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
	return knex.schema.createTable("cart_menu_items", (table) => {
		table.increments("id").primary();
		table.integer("user_id");
		table
            .foreign("user_id")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");
		table.integer("menu_item_id");
		table
			.foreign("menu_item_id")
			.references("id")
			.inTable("menu_items")
			.onDelete("CASCADE");
		table.integer('quantity').notNullable()
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("cart_menu_items");
};
