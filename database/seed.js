//const db = require('./index.js');
//const Product = require('./Product.js');
const faker = require('faker');


var makeMockData = () => {
  var products = [];
  for (var i = 1; i < 20; i++) {
    products.push({
      _id: i,
      name: faker.commerce.productName(),
      reviews: makeMockReviews(),
      itemNum: i,
      price: faker.commerce.price(50, 500),
      color: faker.commerce.color()
    });
  }
  return products;
};

var makeMockReviews = () => {
  var reviews = [];
  var randomNumber = faker.random.number({min: 3, max: 16});

   for (var i = 1; i < randomNumber; i++) {
     reviews.push({
        title: faker.lorem.sentence(),
        review: faker.lorem.sentences(),
        rating: faker.random.number({min: 1, max: 5}),
        recommend: faker.random.boolean()
     });
   }
   return reviews;
};

//console.log(makeMockReviews())
//console.log(makeMockData())

const insertSampleProducts = () => {
  Product.create(makeMockData())
  .then(() => db.disconnect())
};

insertSampleProducts();



