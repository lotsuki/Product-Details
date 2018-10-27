const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/items';

mongoose.connect(mongoUri, {
  autoIndex: false,
  useNewUrlParser: true
});

const db = mongoose.connection.once('open', () => { console.log('Connected to MongoDB') })
.on('error', () => { console.log('Cannot connect to MongoDB') });

// db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;
