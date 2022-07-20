/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.table('fragrances', function (table) {
        table.renameColumn('name', 'display_name');
        table.renameColumn('perfumer', 'perfumers');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.table('fragrances', function (table) {
        table.renameColumn('display_name', 'name');
        table.renameColumn('perfumers', 'perfumer');
      })
};
