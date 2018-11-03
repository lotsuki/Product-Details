const mongoose = require("mongoose");
const db = require("./index.js"); // TODO: fix eslint to ignore import

mongoose.Promise = global.Promise;

const productSchema = mongoose.Schema({
  _id: Number,
  name: String,
  rating: Number,
  reviewCount: Number,
  itemNum: Number,
  price: Number,
  color: String,
  image: String
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
