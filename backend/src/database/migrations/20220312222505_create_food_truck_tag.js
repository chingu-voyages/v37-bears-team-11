/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("food_truck_tag", (table) => {
		table.increments("id").primary();
		table.integer("tag_id");
		table
			.foreign("tag_id")
			.references("id")
			.inTable("tags")
			.onDelete("CASCADE");
		table.integer("food_truck_id");
		table
			.foreign("food_truck_id")
			.references("id")
			.inTable("tags")
			.onDelete("CASCADE");
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("food_truck_tag");
};
