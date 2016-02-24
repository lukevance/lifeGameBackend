exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(table){
    table.increments();
    table.string('stories');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games');
};
