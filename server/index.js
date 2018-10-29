const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('../database/Product.js');


const app = express();

const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/product-details', (req, res) => {

});



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})