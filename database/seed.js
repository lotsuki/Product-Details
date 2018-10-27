const Product = require('./Product.js');
const faker = require('faker');

var createMockProducts = () => {
  var products = [];
  for (var i = 1; i <= 100; i++) {
    products.push({
      _id: i,
      name: faker.commerce.productName(),
      reviews: createMockReviews(),
      itemNum: i,
      price: faker.commerce.price(50, 500),
      color: faker.commerce.color()
    });
  }
  return products;
};

var createMockReviews = () => {
  var reviews = [];
  var randomNumber = faker.random.number({min: 3, max: 16});

   for (var i = 1; i < randomNumber; i++) {
     reviews.push({
       review_id: faker.random.number({ max: 5, min: 1 }),
       reviewer: faker.internet.userName(),
       title: faker.lorem.sentence(),
       body: faker.lorem.paragraph(5),
       recomend: faker.random.boolean(),
       helpful: faker.random.number(47),
       unhelpful: faker.random.number(22)
     });
   }
   return reviews;
};



var data = createMockProducts();

Product.create(data)
//.then(() => db.disconnect());  //WHY DISCONNECT??





