/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
	return knex.schema.createTable("orders", (table) => {
		table.increments("id").primary();
		table.boolean("paid").notNullable();
		table.string("status").notNullable();
		table.integer("food_truck_id").notNullable();
		table
			.foreign("food_truck_id")
			.references("id")
			.inTable("food_trucks")
			.onDelete("cascade");
		table.dateTime("datetime_order_placed").notNullable();
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
