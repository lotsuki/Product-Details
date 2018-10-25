const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

const PORT = ?;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/product-details', (req, res) => {

});



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})