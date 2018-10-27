const Product = require('./Product.js');
const faker = require('faker');
const db = require('./index.js');

var createMockProducts = () => {
  var products = [];
  for (var i = 1; i <= 5; i++) {
    products.push({
      _id: i,
      name: faker.commerce.productName(),
      rating: Number(faker.finance.amount(1, 5, 1)),
      reviewCount: faker.random.number({min: 20, max: 150}),
      itemNum: i,
      price: faker.commerce.price(50, 500),
      color: faker.commerce.color()
    });
  }
  return products;
};

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



var data = createMockProducts();

function inputSampleProducts() {
  //Product.drop()
  Product.create(data);
  // .then(result => {
  //   Product.create(data)
  // })
  // .catch(err => {
  //   console.log('No data saved')
  // })
}


inputSampleProducts();
//.then(() => db.disconnect());  ??





