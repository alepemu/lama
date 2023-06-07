'use strict';

const mongoose = require('./index');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
});

const CategorySchema = new Schema({
  name: String,
  color: String,
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
});

const ItemSchema = new Schema({
  title: String,
  start_date: Date,
  frequency: Number,
  checked: Boolean,
});

const User = mongoose.model('User', UserSchema);
const Category = mongoose.model('Category', CategorySchema);
const Item = mongoose.model('Item', ItemSchema);

module.exports = { User, Category, Item };