/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    return await knex.schema.createTable('fragrances', (table) => {
        table.increments('id').unique().notNullable();
        table.string('list_name', 255).unique().notNullable();
        table.string('name', 150).notNullable();
        table.string('house', 150).notNullable();
        table.string('perfumer', 150);
        table.string('collection', 150);
        table.date('release').notNullable();
        table.date('added');
        table.string('in_production', 255).notNullable();
        table.text('notes');
        table.text('top_notes');
        table.text('mid_notes');
        table.text('base_notes');
        table.text('accords');
        table.text('concentration');
        table.text('longevity');
        table.text('sillage');
        table.text('gender');
        table.text('value');
        table.text('presentation');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    table.dropTable('fragrances');
    return await knex.schema;
};
