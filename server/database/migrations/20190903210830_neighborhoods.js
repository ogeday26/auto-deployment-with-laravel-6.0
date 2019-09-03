exports.up = function(knex) {
  return knex.schema.createTable('neighborhoods', table => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table
      .integer('district_id')
      .references('id')
      .inTable('districts');
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();

    table.string('name').notNull();
    table.string('latitude').notNull();
    table.string('longitude').notNull();
  });
};

exports.down = function(knex) {};
