//Documentation: https://www.npmjs.com/package/faker
var faker = require("faker");

var database = {
  products: [],
  categories: [],
  carts: [],
  users: [],
  messages: []
};

for (var i = 1; i <= 200; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(100, 999, 2),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
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
  id: "1",
  username: "admin",
  email: "admin@admin.com",
  isadmin: true,
});

database.users.push({
  id: "2",
  username: "user",
  email: "user@user.com",
  isadmin: false,
});

database.messages.push(
  {
    "id": 1,
    "folder": "inbox",
    "from": "Jane Smith",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
    "full": "Full message from Jane Smith",
    "timestamp": 1487848162905
  },
  {
    "id": 2,
    "folder": "inbox",
    "from": "John Doe",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
    "full": "Full message from John Doe",
    "timestamp": 1487845787719
  },
  {
    "id": 3,
    "folder": "inbox",
    "from": "Joseph Hanes",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
    "full": "Full message from Joseph Hanes",
    "timestamp": 1487845787719
  },
  {
    "id": 4,
    "folder": "trash",
    "from": "Laurence Murray",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
    "full": "Full message from Laurence Murray",
    "timestamp": 1487845787719
  }
);

console.log(JSON.stringify(database));
