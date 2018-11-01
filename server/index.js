const express = require("express");
const bodyParser = require("body-parser");

// const mongoose = require("mongoose");
const Products = require("../database/Product.js");

const app = express();

const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../client/dist`));

app.get("/api/posts", (req, res) => {
  Products.find()
    .limit(1)
    .exec((err, result) => {
      if (err) {
        res.status(500).send("Could not receive GET request");
      } else {
        res.send(result);
      }
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
