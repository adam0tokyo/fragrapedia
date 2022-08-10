/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return await knex.schema.createTable('users', (table) => {
        table
            .uuid('user_id')
            .primary()
            .notNullable()
            .defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('username', 50).notNullable().unique();
        table.string('user_email', 150).notNullable().unique();
        table.string('hashed_password', 150).notNullable();
        table.timestamps(false, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    table.dropTable('users');
    return await knex.schema;
};
