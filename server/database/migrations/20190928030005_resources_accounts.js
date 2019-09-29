exports.up = function(knex) {
  return knex.schema.createTable('resources_accounts', table => {
    table
      .increments('id')
      .unsigned()
      .primary();

    table
      .integer('resource_id')
      .references('id')
      .inTable('resources');
    table
      .integer('account_id')
      .references('id')
      .inTable('accounts');
    table.unique(['resource_id', 'account_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('resources_accounts');
};
