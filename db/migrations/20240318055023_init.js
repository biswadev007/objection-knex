/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('channel', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.timestamp('created_at', true);
    })
    .createTable('user', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.integer('channelId').references('id').inTable('channel');
      table.timestamp('created_at', true);
    })
    .createTable('video', (table) => {
      table.increments();
      table.string('title').notNullable();
      table
        .integer('channelId')
        .notNullable()
        .references('id')
        .inTable('channel');
      table.timestamp('created_at', true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropSchemaIfExists('video')
    .dropSchemaIfExists('user')
    .dropSchemaIfExists('channel');
};
