
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('players').del(),

    // Inserts seed entries
    knex('players').insert({
      name: 'Jimmy',
      email: 'thisguy@hotmail.com',
      password: '$2a$10$rxoir.fG12nUFKof7jxOjuR59c4ybXeZzpecLC0diULKvypuh8cPC',
      gender: 'male',
      color: 'yellow',
      high_score: '10000',
      games_played: '49',
      games_won: '0',
      children_created: '4',
      times_married: '98',
      net_value: '64'
    }),
    knex('players').insert({
      name: 'Marge',
      email: 'ladyhead@hotmail.com',
      password: 'password',
      gender: 'female',
      color: 'pink',
      high_score: '9300',
      games_played: '12',
      games_won: '4',
      children_created: '100',
      times_married: '8',
      net_value: '7'
    })
  );
};
