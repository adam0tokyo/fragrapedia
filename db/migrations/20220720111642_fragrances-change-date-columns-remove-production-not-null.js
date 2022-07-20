/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function(knex) {
    return await knex.schema.alterTable('fragrances', function (table) {
        table.string('release', 150).notNullable().alter({alterType: true});
        table.string('added', 150).alter({alterType: true});
        table.string('in_production', 255).nullable().alter({alterNullable: true});
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.alterTable('fragrances', function (table) {
        table.date('release').notNullable().alter({alterType: true});
        table.date('added').alter({alterType: true});
        table.string('in_production', 255).notNullable().alter({alterNullable: true});
    })
};