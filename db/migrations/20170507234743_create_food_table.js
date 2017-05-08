
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.integer('quantity').defaultsTo(2);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food');
};
