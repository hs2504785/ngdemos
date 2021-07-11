//Documentation: https://www.npmjs.com/package/faker
var faker = require('faker');

var database = {
  products: [],
  categories: [],
  carts: [],
  users: [],
  messages: [],
  playlist: [],
};

for (var i = 1; i <= 200; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(100, 999, 2),
    imageUrl: 'https://source.unsplash.com/1600x900/?product',
    quantity: faker.datatype.number(),
  });
}

for (var i = 1; i <= 50; i++) {
  database.categories.push({
    id: i,
    name: faker.lorem.word(),
    description: faker.lorem.sentence(),
  });
}

database.carts.push({
  id: 1,
  userid: 2,
  products: [],
});

database.carts.push({
  id: 2,
  userid: 1,
  products: [],
});

database.users.push({
  id: '1',
  username: 'admin',
  email: 'admin@admin.com',
  isadmin: true,
});

database.users.push({
  id: '2',
  username: 'user',
  email: 'user@user.com',
  isadmin: false,
});

database.messages.push(
  {
    _id: '1',
    folder: 'inbox',
    from: 'Jane Smith',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus',
    full: 'Full message from Jane Smith',
    timestamp: 1487848162905,
  },
  {
    _id: '2',
    folder: 'inbox',
    from: 'John Doe',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus',
    full: 'Full message from John Doe',
    timestamp: 1487845787719,
  },
  {
    _id: '3',
    folder: 'inbox',
    from: 'Joseph Hanes',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus',
    full: 'Full message from Joseph Hanes',
    timestamp: 1487845787719,
  },
  {
    _id: '4',
    folder: 'trash',
    from: 'Laurence Murray',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus',
    full: 'Full message from Laurence Murray',
    timestamp: 1487845787719,
  },
);

database.playlist.push(
  {
    id: 1,
    artist: 'Oasis',
    track: 'Half The World Away',
    listened: true,
    favourite: false,
  },
  {
    id: 2,
    artist: 'Pink Floyd',
    track: 'Wish You Were Here',
    listened: false,
    favourite: false,
  },
  {
    id: 3,
    artist: 'Blink-182',
    track: 'All The Small Things',
    listened: false,
    favourite: true,
  },
  {
    id: 4,
    artist: 'Third Eye Blind',
    track: 'Get Me Out Of Here',
    listened: false,
    favourite: false,
  },
  {
    id: 5,
    artist: 'The Chainsmokers',
    track: 'Closer',
    listened: true,
    favourite: true,
  },
  {
    id: 6,
    artist: 'Sia',
    track: 'Cheap Thrills',
    listened: false,
    favourite: true,
  },
  {
    id: 7,
    artist: 'Birdy',
    track: 'Wild Horses',
    listened: false,
    favourite: true,
  },
  {
    id: 8,
    artist: 'Stereophonics',
    track: 'Local Boy In The Photograph',
    listened: false,
    favourite: false,
  },
);

console.log(JSON.stringify(database));
