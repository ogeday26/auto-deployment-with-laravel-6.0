exports.up = function(knex) {
  return knex.schema.createTable('users_accounts', table => {
    table
      .increments('id')
      .unsigned()
      .primary();

    table
      .integer('account_id')
      .references('id')
      .inTable('accounts');
    table
      .integer('user_id')
      .references('id')
      .inTable('users');
    table.unique(['account_id', 'user_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_accounts');
};
