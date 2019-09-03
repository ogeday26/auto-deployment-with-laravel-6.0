exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();

    table.string('firstname').notNull();
    table.string('lastname').notNull();
    table.string('email').notNull();
    table.string('password', 512).notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
