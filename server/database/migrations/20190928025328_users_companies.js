exports.up = function(knex) {
  return knex.schema.createTable('users_companies', table => {
    table
      .increments('id')
      .unsigned()
      .primary();

    table
      .integer('user_id')
      .references('id')
      .inTable('users');
    table
      .integer('company_id')
      .references('id')
      .inTable('companies');
    table.unique(['user_id', 'company_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_companies');
};
