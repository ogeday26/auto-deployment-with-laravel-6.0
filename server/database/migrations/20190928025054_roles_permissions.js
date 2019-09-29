exports.up = function(knex) {
  return knex.schema.createTable('roles_permissions', table => {
    table
      .increments('id')
      .unsigned()
      .primary();

    table
      .integer('role_id')
      .references('id')
      .inTable('roles');
    table
      .integer('permission_id')
      .references('id')
      .inTable('permissions');
    table.unique(['role_id', 'permission_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles_permissions');
};
