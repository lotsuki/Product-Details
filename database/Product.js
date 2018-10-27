const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const productSchema = mongoose.Schema({
  _id: Number,
  name: String,
  reviews: [{
    review_id: Number,
    reviewer: String,
    title: String,
    body: String,
    recomend: Boolean,
    helpful: Number,
    unhelpful: Number
  }],
  itemNum: Number,
  price: Number,
  color: String
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;