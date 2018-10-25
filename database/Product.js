const mongoose = require('mongoose');
const db = require('./index.js');

const Product = new mongoose.Schema({
  _id: Number,
  name: String,
  itemNum: Number,
  price: Number,
  color: String
});


const Product = ('Product', productSchema);

module.exports = Product;