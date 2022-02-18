/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
	return knex.schema.createTable("orders_menu_items", (table) => {
		table.increments("id").primary();
		table.integer("order_id");
		table
			.foreign("order_id")
			.references("id")
			.inTable("orders")
			.onDelete("CASCADE");
		table.integer("menu_item_id");
		table
			.foreign("menu_item_id")
			.references("id")
			.inTable("menu_items")
			.onDelete("CASCADE");
        table.integer('quantity').notNullable()
        table.timestamps(true, true);

	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("orders_menu_items");
};
