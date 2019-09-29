exports.up = function(knex) {
  return knex.schema.createTable('resources_permissions', table => {
    table
      .increments('id')
      .unsigned()
      .primary();

    table
      .integer('resource_id')
      .references('id')
      .inTable('resources');
    table
      .integer('permission_id')
      .references('id')
      .inTable('permissions');
    table.unique(['resource_id', 'permission_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('resources_permissions');
};
