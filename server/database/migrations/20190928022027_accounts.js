exports.up = function(knex) {
  return knex.schema.createTable('accounts', table => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table
      .dateTime('createdAt')
      .notNull()
      .defaultTo(knex.fn.now());
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();

    table.string('name').notNull();
    table.string('table_prefix', 63).notNull();
    table.integer('storage_limit').defaultTo(10);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('accounts');
};
