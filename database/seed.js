/* eslint-disable import/no-extraneous-dependencies */

const faker = require("faker");
const Product = require("./Product.js");
const db = require("./index.js");

db.dropCollection("products", () => {});

const createMockProducts = () => {
  const products = [];
  for (let i = 1; i <= 100; i += 1) {
    products.push({
      _id: i,
      name: faker.commerce.productName(),
      rating: Number(faker.finance.amount(1, 5, 1)),
      reviewCount: faker.random.number({ min: 20, max: 150 }),
      itemNum: i,
      price: faker.commerce.price(50, 500),
      color: faker.commerce.color(),
      image: `https://s3-us-west-1.amazonaws.com/hrr34-trailblazer/${i}.jpg`
    });
  }
  return products;
};

const data = createMockProducts();

function inputSampleProducts() {
  return Product.create(data)
    .then(() => db.close())
    .catch(err => console.log("err", err));
}

inputSampleProducts();

module.exports.createMockProducts = createMockProducts;

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
