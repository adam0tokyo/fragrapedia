/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    return await knex.schema.createTable("fragrances", (table) => {
      table.increments('id');
      table.string('name', 255)
          .unique()
          .notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    return await knex.schema
      .dropTable('fragrances');
  };
  