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
		table.integer("user");
		table.foreign("user")
        .references("id")
        .inTable("users")
        .onDelete("cascade");
		table.string("address");
		table
			.foreign("address")
			.references("id")
			.inTable("adresses")
			.onDelete("cascade");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
