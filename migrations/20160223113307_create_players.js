exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function(table){
    table.increments();
    table.string('name');
    table.string('gender');
    table.string('color');
    table.integer('high_score');
    table.integer('games_played');
    table.integer('games_won');
    table.integer('children_created');
    table.integer('times_died');
    table.integer('times_married');
    table.integer('net_value');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players');
};
