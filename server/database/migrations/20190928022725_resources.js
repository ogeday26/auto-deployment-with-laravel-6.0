exports.up = function(knex) {
  return knex.schema.createTable('resources', table => {
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
    table
      .integer('resource_id')
      .references('id')
      .inTable('resources');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('resources');
};
