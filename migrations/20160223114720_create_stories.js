exports.up = function(knex, Promise) {
  return knex.schema.createTable('stories', function(table){
    table.increments();
    table.integer('game_id');
    table.string('title');
    table.string('type');
    table.string('url');
    table.string('sentiment');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stories');
};
