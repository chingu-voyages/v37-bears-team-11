/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.alterTable('users', (table) => {
        // table.string('salt').notNullable()
        // table.string('hash').notNullable()
        table.string('salt')
        table.string('hash')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.alterTable('users', (table) => {
        table.dropColumn('salt')
        table.dropColumn('hash')
    })
}
