const mongoose = require("mongoose");
window.db = require("./index.js"); /* exported variableName */

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

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
