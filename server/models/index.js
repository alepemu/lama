"use strict";

const mongoose = require("mongoose");

const { FL0 } = process.env;

const uri = FL0
  ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@lama-web.sniwull.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  : `mongodb://127.0.0.1:${process.env.DB_LOCAL_PORT || "27017"}/${
      process.env.DB_LOCAL_NAME || "lama_beta"
    }`;

async function main() {
  try {
    await mongoose.connect(uri);
    console.log(
      "Connected to the MongoDB " + (FL0 ? "Atlas" : "local") + " database"
    );
  } catch (err) {
    console.log("Something went wrong when connecting to the database : ", err);
  }
}
main();

module.exports = mongoose;
