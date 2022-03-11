/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del()
    await knex('users').insert([
        {
            username: 'hungry_jack',
            password: 'password',
            email: 'hungryjack@mail.com',
            phone: '5555555555',
            address: 1,
            is_operator: true,
            first_name: 'Jack',
            last_name: 'Marshall',
        },
        {
            username: 'martha_wants_food',
            password: 'password',
            email: 'martha@mail.com',
            phone: '8888888888',
            address: 2,
            is_operator: false,
            first_name: 'Martha',
            last_name: 'DeLeon',
        },

        {
            username: 'fast_foods',
            password: 'password',
            email: 'fast_foods@mail.com',
            phone: '7777777777',
            address: 3,
            is_operator: true,
            first_name: 'Wendy',
            last_name: 'Speed',
        },
        {
            username: 'hammer',
            password: 'password',
            email: 'hammer@mail.com',
            phone: '9999999999',
            address: 4,
            is_operator: false,
            first_name: 'Hammer',
            last_name: 'Orcheimer',
        },

        {
            username: 'francyfeast',
            password: 'password',
            email: 'francisca@mail.com',
            phone: '2222222222',
            address: 5,
            is_operator: false,
            first_name: 'Francisca',
            last_name: 'Pawsmith',
        },
    ])
}
