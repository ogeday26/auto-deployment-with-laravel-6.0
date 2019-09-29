exports.up = function(knex) {
  return knex.schema.createTable('roles_accounts', table => {
    table
      .increments('id')
      .unsigned()
      .primary();

    table
      .integer('role_id')
      .references('id')
      .inTable('roles');
    table
      .integer('account_id')
      .references('id')
      .inTable('accounts');
    table.unique(['role_id', 'account_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles_accounts');
};
