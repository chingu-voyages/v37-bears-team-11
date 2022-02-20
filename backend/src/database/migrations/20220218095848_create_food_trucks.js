/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
	return knex.schema.createTable("food_trucks", (table) => {
		table.increments("id").primary();
		table.string("name").notNullable();
		table.string("phone").notNullable();
		table.string("hours").notNullable();
		table.integer("user_id");
		table
            .foreign("user_id")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");
		table.integer("address_id");
		table
			.foreign("address_id")
			.references("id")
			.inTable("addresses")
			.onDelete("CASCADE");
        table.timestamps(true, true);

	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("food_trucks");
};
