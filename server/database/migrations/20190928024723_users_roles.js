exports.up = function(knex) {
  return knex.schema.createTable('users_roles', table => {
    table
      .increments('id')
      .unsigned()
      .primary();

    table
      .integer('role_id')
      .references('id')
      .inTable('roles');
    table
      .integer('user_id')
      .references('id')
      .inTable('users');
    table.unique(['role_id', 'user_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_roles');
};
