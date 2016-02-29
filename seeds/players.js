
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
      high_score: '9300',
      games_played: '12',
      games_won: '4',
      children_created: '100',
      times_married: '8',
      net_value: '7'
    }),
    knex('players').insert({
      name: 'Red Guest',
      email: 'guest1@guest.com',
      password: '$2a$10$B/maj.7J0sSmWwU6Ohoz7u6BbOdURqLqnxbcvY7Ra619M5yfeBY/u',
      gender: '',
      high_score: '0',
      games_played: '0',
      games_won: '0',
      children_created: '0',
      times_married: '0',
      net_value: '0'
    }),
    knex('players').insert({
      name: 'Orange Guest',
      email: 'guest2@guest.com',
      password: '$2a$10$B/maj.7J0sSmWwU6Ohoz7u6BbOdURqLqnxbcvY7Ra619M5yfeBY/u',
      gender: '',
      high_score: '0',
      games_played: '0',
      games_won: '0',
      children_created: '0',
      times_married: '0',
      net_value: '0'
    }),
    knex('players').insert({
      name: 'Blue Guest',
      email: 'guest3@guest.com',
      password: '$2a$10$B/maj.7J0sSmWwU6Ohoz7u6BbOdURqLqnxbcvY7Ra619M5yfeBY/u',
      gender: '',
      high_score: '0',
      games_played: '0',
      games_won: '0',
      children_created: '0',
      times_married: '0',
      net_value: '0'
    }),
    knex('players').insert({
      name: 'Yellow Guest',
      email: 'guest4@guest.com',
      password: '$2a$10$B/maj.7J0sSmWwU6Ohoz7u6BbOdURqLqnxbcvY7Ra619M5yfeBY/u',
      gender: '',
      high_score: '0',
      games_played: '0',
      games_won: '0',
      children_created: '0',
      times_married: '0',
      net_value: '0'
    }),
    knex('players').insert({
      name: 'Olive Guest',
      email: 'guest5@guest.com',
      password: '$2a$10$B/maj.7J0sSmWwU6Ohoz7u6BbOdURqLqnxbcvY7Ra619M5yfeBY/u',
      gender: '',
      high_score: '0',
      games_played: '0',
      games_won: '0',
      children_created: '0',
      times_married: '0',
      net_value: '0'
    }),
    knex('players').insert({
      name: 'Teal Guest',
      email: 'guest6@guest.com',
      password: '$2a$10$B/maj.7J0sSmWwU6Ohoz7u6BbOdURqLqnxbcvY7Ra619M5yfeBY/u',
      gender: '',
      high_score: '0',
      games_played: '0',
      games_won: '0',
      children_created: '0',
      times_married: '0',
      net_value: '0'
    })
  );
};
