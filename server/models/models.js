"use strict";

const mongoose = require("./index");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  notif_due: { type: Boolean, default: false },
  notif_opt: { type: Boolean, default: false },
  notif_freq: { type: Number, default: "1" },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

const CategorySchema = new Schema({
  name: String,
  color: { type: String, default: "cat-def" },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

const ItemSchema = new Schema({
  title: String,
  start_date: { type: Date, default: null },
  checked: { type: Boolean, default: false },
  freq_weeks: { type: Number, default: "0" },
  parent: { type: Schema.Types.ObjectId, ref: "Category" },
});

const User = mongoose.model("User", UserSchema);
const Category = mongoose.model("Category", CategorySchema);
const Item = mongoose.model("Item", ItemSchema);

module.exports = { User, Category, Item };
