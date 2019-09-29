exports.up = function(knex) {
  return knex.schema.createTable('companies', table => {
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
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('companies');
};
