const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const productSchema = mongoose.Schema({
  _id: Number,
  name: String,
  rating: Number,
  reviewCount: Number,
  itemNum: Number,
  price: Number,
  color: String
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;