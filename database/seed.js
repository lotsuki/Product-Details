const faker = require("faker");
const Product = require("./Product.js");
const db = require("./index.js");

db.dropCollection("", () => {}); // TODO

const createMockProducts = () => {
  const products = [];
  for (let i = 1; i <= 101; i += 1) {
    products.push({
      _id: i,
      name: faker.commerce.productName(),
      rating: Number(faker.finance.amount(1, 5, 1)),
      reviewCount: faker.random.number({ min: 20, max: 150 }),
      itemNum: i,
      price: faker.commerce.price(50, 500),
      color: faker.commerce.color()
    });
  }
  return products;
};

const data = createMockProducts();

function inputSampleProducts() {
  return Product.create(data);
  // .then() TODO
}

inputSampleProducts();

// var createMockReviews = () => {
//   var reviews = [];
//   var randomNumber = faker.random.number({min: 3, max: 16});

//    for (var i = 1; i < randomNumber; i++) {
//      reviews.push({
//        review_id: faker.random.number({ max: 5, min: 1 }),
//        reviewer: faker.internet.userName(),
//        title: faker.lorem.sentence(),
//        body: faker.lorem.paragraph(5),
//        recomend: faker.random.boolean(),
//        helpful: faker.random.number(47),
//        unhelpful: faker.random.number(22)
//      });
//    }
//    return reviews;
// };
