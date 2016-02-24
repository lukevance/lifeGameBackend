exports.up = function(knex, Promise) {
  return knex.schema.createTable('games_players', function(table){
    table.increments();
    table.integer('game_id');
    table.integer('player_id');
    table.integer('money');
    table.integer('position');
    table.string('occupation');
    table.boolean('college');
    table.boolean('marriage');
    table.integer('kids');
    table.boolean('chipotle');
    table.integer('salary');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games_players');
};
