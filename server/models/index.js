'use strict';

const mongoose = require('mongoose');

// Importing the models
// const User = require('./user');
// const Category = require('./category');
// const Item = require('./item');

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/lama_test');
    console.log('Connected to the database');
  } catch {
    console.log('Something went wrong when connecting to the database');
  }
}

// module.exports = { User, Category, Item };
module.exports = mongoose;
