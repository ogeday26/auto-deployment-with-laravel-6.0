exports.up = function(knex) {
  return knex.schema.createTable('users_workplaces', table => {
    table
      .increments('id')
      .unsigned()
      .primary();

    table
      .integer('user_id')
      .references('id')
      .inTable('users');
    table
      .integer('workplace_id')
      .references('id')
      .inTable('workplaces');
    table.unique(['user_id', 'workplace_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_workplaces');
};
