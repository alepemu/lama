"use strict";

const mongoose = require("mongoose");

// const { FLY_IO } = process.env;

// const uri = FLY_IO ?
//     `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@lama-web.sniwull.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority` :
//     `mongodb://127.0.0.1:${process.env.DB_PORT || '27017'}/${process.env.DB_NAME || 'lama_beta'}`;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@lama-web.sniwull.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

async function main() {
  try {
    await mongoose.connect(uri);
    console.log(
      //   "Connected to the MongoDB " + (FLY_IO ? "Atlas" : "local") + " database"
      "Connected to the MongoDB Atlas database"
    );
  } catch (err) {
    console.log("Something went wrong when connecting to the database : ", err);
  }
}

main();

module.exports = mongoose;
