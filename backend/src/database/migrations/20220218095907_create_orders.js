/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
	return knex.schema.createTable("orders", (table) => {
		table.increments("id").primary();
		table.integer('user_id')
		table
			.foreign("user_id")
			.references("id")
			.inTable("users")
			.onDelete("CASCADE");
		table.dateTime("datetime_order_placed").notNullable();
		table.boolean("paid").notNullable();
		table.string("status").notNullable();
		table.integer("food_truck_id").notNullable();
		table
			.foreign("food_truck_id")
			.references("id")
			.inTable("food_trucks")
			.onDelete("CASCADE");
    	table.timestamps(true, true);

	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("orders");
};
