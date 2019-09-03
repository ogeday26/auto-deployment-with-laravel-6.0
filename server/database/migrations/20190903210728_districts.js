exports.up = function(knex) {
  return knex.schema.createTable('districts', table => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table
      .integer('city_id')
      .references('id')
      .inTable('cities');
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();

    table.string('name').notNull();
    table.string('latitude').notNull();
    table.string('longitude').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('districts');
};
