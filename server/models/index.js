'use strict';

const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(
      `mongodb://127.0.0.1:${process.env.DB_PORT || '27017'}/${process.env.DB_NAME || 'lama_beta'}`
    );
    console.log('Connected to the database');
  } catch {
    console.log('Something went wrong when connecting to the database');
  }
}

module.exports = mongoose;
